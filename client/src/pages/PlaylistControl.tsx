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
    goBack: (event:any)=>void;
} 


const PlaylistControl = (props: PlaylistControlProps) => {

  const [tracks, setTracks] = useState<any>(null);


  const fetchPlaylistTracks = async () =>{
    try{
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
  
  const massageTrackData = (jsonData:any) => {

    // extract tracklist
    const { playlistTracks: {items} } = jsonData;

    // for each track entry...
    const tracksArray = items.map((item: any) => {
      let track = {} as Track;
      let artists = [] as Artist[];
      let album = {} as Album;

      let item_data = item.track;
      let artists_array = item_data.artists;
      let album_data = item_data.album;

      // extract artist data
      artists_array.forEach((element: any) =>{
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
      
      console.log(track)

      return true;
    })

    setTracks(tracksArray);

    setTracks(null)
  }
  
  useEffect(() => {
    fetchPlaylistTracks();
  }, []);

  return (      
    <main>
        <button onClick={()=>{props.goBack(null)}}>Go back</button>
        <div>{!tracks? <MoonLoader/> : <></>}</div>
    </main>
  );
}

export default PlaylistControl;