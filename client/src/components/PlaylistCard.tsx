// displays playlist image and title
// internally contains the playlist id

import { useEffect, useState } from "react";
import Playlist from "../types/Playlist";

type PlaylistCardProps = {
  playlist: Playlist;
  selectCard: (event: any) => void;
}

const PlaylistCard = (props: PlaylistCardProps) => {

  return (
    <div className='w-[100%] h-[100%] m-auto'>
      {/* This is the thing that users actually click */}
      <div onClick={() => { props.selectCard(props.playlist); }}
        className="clickable w-[90%] rounded-2xl shadow-2xl overflow-hidden h-[90%] m-auto z-20 transition-all delay-50 hover:scale-110 group/card cursor-pointer">            <div className="flex justify-center w-[100%] h-[100%]">
          <div className="relative w-[100%] max-h-[100%] flex items-center ">
            <div className="bg-black border-2 border-white text-xs md:text-s lg:text-md p-2 rounded-lg text-white absolute z-10 bottom-3 right-3 flex items-center">
              <p>{props.playlist.name}</p>
            </div>
            <img className="w-[100%] h-[100%] object-scale-down" src={props.playlist.image_url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;



