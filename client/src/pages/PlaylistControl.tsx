// Displays a playlist's tracks and provides tools
// for the user to control bot actions and scheduling

import { useEffect, useState } from "react";
import Playlist from "../types/Playlist";
import Track from "../types/Track";
import { MoonLoader } from "react-spinners";
import Artist from "../types/Artist";
import Album from "../types/Album";
import exit_button_img from "../static/exit_button.svg";
import BotDashboard from "../components/BotDashboard";
import TrackCard from "../components/TrackCard";
import Spinner from "../components/Spinner";

type PlaylistControlProps = {
  playlist: Playlist;
  // Cache used to prevent excessive API calls when navigating 
  // between multiple playlists on the dashboard
  cachedTrackData: Map<string, Track[]>;
  goBack: (event: any) => void;
}


const PlaylistControl = (props: PlaylistControlProps) => {

  const [tracks, setTracks] = useState<any>();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const deleteTrack = async (uri: string) => {

    if(!window.confirm("Are you sure you want to delete this track?")){
        return;
    }

    const data = {
        tracks: [{uri: uri}],
    };
    try {
        const response = await fetch(`/removeTracks?id=${props.playlist.id}&tracks=${JSON.stringify(data)}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
        });
        if (!response.ok) {
            throw new Error('Network response was not ok. Code: ' + response.status);
        }

        let trackArray = props.cachedTrackData.get(props.playlist.id) as Track[];
        if(trackArray == undefined){return;}
        console.log("TRACK ARRAY")
        console.log(trackArray)

        for(let i = 0; i < trackArray.length; i++){
          if(trackArray[i].uri == uri){
            trackArray.splice(i, 1);
            break;
          }
        }
        setTracks(trackArray)
        props.cachedTrackData.set(props.playlist.id, trackArray);
        
    } catch (error) {
        console.error('Error:', error);
    }
}


  const fetchPlaylistTracks = async () => {
    
    if(props.cachedTrackData.has(props.playlist.id)){
      setTracks(props.cachedTrackData.get(props.playlist.id));
    }
    else{
      try {
        const response = await fetch(`/getPlaylistTracks?id=${props.playlist.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok. Code: ' + response.status);
        }
        const jsonData = await response.json();
        massageTrackData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  const massageTrackData = (jsonData: any) => {

    // extract tracklist
    const { playlistTracks: { items } } = jsonData;

    // for each track entry...
    const tracksArray:Track[] = items.map((item: any) => {
      let track = {} as Track;
      let artists = [] as Artist[];
      let album = {} as Album;

      let item_data = item.track;
      let artists_array = item_data.artists;
      let album_data = item_data.album;

      // extract artist data
      artists_array.forEach((element: any) => {
        let artist = {} as Artist;
        artist.name = element.name;
        artist.id = element.id;
        artist.api_ref = element.href;
        artist.spotify_url = element.external_urls.spotify;
        artists.push(artist);
      });

      // extract album data
      album.api_ref = album_data.href;
      album.id = album_data.id;
      album.image_url = album_data.images[0].url;
      album.name = album_data.name;
      album.spotify_url = album_data.external_urls.spotify;

      // extract track data and build
      track.added_at = item.added_at;
      track.artists = artists;
      track.album = album;
      track.api_ref = item_data.href;
      track.id = item_data.id;
      track.name = item_data.name;
      track.preview_url = item_data.preview_url;
      track.spotify_url = item_data.external_urls.spotify;
      track.added_by = item.added_by.id;
      track.uri = item_data.uri;
      return track;
    })

    setTracks(tracksArray);
    props.cachedTrackData.set(props.playlist.id, tracksArray)
  }

  // initialize track list on load
  if(!tracks){
    fetchPlaylistTracks();
  }

  return (
    <main>
      <div className="w-full h-screen max-h-screen overflow-none">
        <div className="w-[100%] mt-[6%] h-[90%] m-auto rounded-2xl bg-gray-200 border-gray-200 border-2 shadow-xl relative">
          {/* EXIT button (back to playlist selection dashboard) */}
          <div onClick={() => { props.goBack(null) }}
            className="absolute h-12 w-12 -right-4 -top-4 z-50 rounded-full border-2">
            <img draggable="false" className="hover:opacity-50 active:opacity-100 cursor-pointer object-scale-down" src={exit_button_img}></img>
          </div>
          <div className="w-[100%] h-[100%] flex flex-col">
            {/* Tracks / Album Art Container */}
            <div className="bg-white z-10 rounded-b-3xl rounded-2xl shadow-md py-2 px-1 flex flex-row h-[50%] space-x-4">
              {/* Album art */}
              <div className="flex flex-row items-start h-[100%] pb-2 pl-2 pt-2">
                {/* Image container */}
                <div className="aspect-square h-[100%]">
                  <div className='w-[100%] h-[100%] m-auto'>
                    <div className="w-[100%] overflow-hidden h-[100%] z-20">
                      <div className="flex justify-center w-[100%] h-[100%]">
                        <div className="w-[100%] max-h-[100%] flex items-center ">
                          <img className="w-[100%] h-[100%] object-scale-down rounded-2xl" src={props.playlist.image_url} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Track container and details */}
              <div className="w-[100%] h-[100%] flex flex-col pt-4 pb-2 overflow-hidden">
                <div className="flex flex-row justify-between items-center w-[95%] mb-2">
                  <p className="text-3xl font-bold">{props.playlist.name}</p>
                  {/* <p className="text-xl font-light">{props.playlist.owner}</p> */}
                </div>
                <div className="flex flex-row justify-between items-center w-[95%]">
                  <p className="text-2xl font-light">Tracks</p>
                  <input placeholder="Search..." type="text" id="search" name="search" className="outline-none focus:border-b focus:border-green-400 border-b-2 border-200-gray font-thin text-lg w-[25%]"/>
                </div>
                <div className="w-[95%] overflow-scroll flex flex-col rounded-md border-2 divide-y border-400-gray">
                  {!tracks ? 
                    <div className="h-screen flex justify-center">
                        <Spinner size={75}/>
                    </div> 
                    : 
                    tracks.map(function (val: Track, index: number) {return <TrackCard track={val} deleteTrack={()=>{deleteTrack(val.uri)}}/>})}
                </div>
              </div>
            </div>
            {/* Bot Dashboard Container */}
            <BotDashboard />
          </div>

        </div>
      </div>
    </main>
  );
}

export default PlaylistControl;