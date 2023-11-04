// Displays a playlist's tracks and provides tools
// for the user to control bot actions and scheduling

import Playlist from "../types/Playlist";

type PlaylistControlProps = {
    playlist: Playlist;
    goBack: (event:any)=>void;
}

const PlaylistControl = (props: PlaylistControlProps) => {

    console.log(props)

  return (      
    <main>
        <button onClick={()=>{props.goBack(null)}}>Go back</button>
        <div>{props.playlist.id}</div>
    </main>
  );
}

export default PlaylistControl;