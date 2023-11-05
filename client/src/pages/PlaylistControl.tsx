// Displays a playlist's tracks and provides tools
// for the user to control bot actions and scheduling

import { useEffect, useState } from "react";
import Playlist from "../types/Playlist";
import Track from "../types/Track";
import { MoonLoader } from "react-spinners";
import Artist from "../types/Artist";
import Album from "../types/Album";

type PlaylistControlProps = {
  playlist: Playlist;
  goBack: (event: any) => void;
}


const PlaylistControl = (props: PlaylistControlProps) => {

  const [tracks, setTracks] = useState<any>(null);


  const fetchPlaylistTracks = async () => {
    try {
      const response = await fetch('/getPlaylistTracks');
      if (!response.ok) {
        throw new Error('Network response was not ok. Code: ' + response.status);
      }
      const jsonData = await response.json();
      massageTrackData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const massageTrackData = (jsonData: any) => {

    // extract tracklist
    const { playlistTracks: { items } } = jsonData;

    // for each track entry...
    const tracksArray = items.map((item: any) => {
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

      return track;
    })

    setTracks(tracksArray);

  }

  useEffect(() => {
    fetchPlaylistTracks();
  }, []);

  return (
    <main>

      {!tracks ? <MoonLoader /> :
        <div className="w-full h-screen max-h-screen overflow-hidden">
          <div className="w-[100%] mt-12 h-[80%] shadow-sm m-auto rounded-2xl border-2 border-400-gray">
            <div className="w-[100%] h-[100%] flex flex-col">
              {/* Tracks / Album Art Container */}
              <div className="flex flex-row h-[50%] space-x-4 border-b-2 border-400-gray">
                {/* Album art and details */}
                <div className="flex flex-col w-[40%] items-start h-[100%] overflow-hidden">
                  {/* Image container */}
                  <div className="aspect-square h-[100%] rounded-2xl">
                    <div className='w-[100%] h-[100%] m-auto'>
                      <div className="w-[100%] overflow-hidden h-[100%] z-20">          
                        <div className="flex justify-center w-[100%] h-[100%]">
                          <div className="relative w-[100%] max-h-[100%] flex items-center ">
                            <img className="w-[100%] h-[100%] rounded-2xl object-scale-down" src={props.playlist.image_url} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[100%]"></div>
                </div>
                <div className="w-[100%] h-[100%] flex flex-col pt-4">
                  <p className="text-xl font-bold">Tracks</p>
                  <div className="w-[95%] rounded-md border-2 border-400-gray">
                    track container
                  </div>
                  <div>test</div>
                </div>
              </div>
              {/* Bot Dashboard Container */}
              
              <div> The bot dashboard goes here</div>
            </div>

          </div>
        </div>
      }
    </main>
  );
}

export default PlaylistControl;