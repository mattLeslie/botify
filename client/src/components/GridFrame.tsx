import { createRef, useRef, useState } from "react";
import Playlist from "../types/Playlist";
import PlaylistCard from "./PlaylistCard";

type GridFrameProps = {
    // sorted array
    elementList: any[];
    // optional search term to display elements with 
    // matching name value
    searchTerm?: string;
}
const GridFrame = (props: GridFrameProps) => {


  const compareStringLikeness = (val:any) => {

    if(props.searchTerm == ""){
      return false;
    }
    if(val.props.playlist.name.toLowerCase().includes(props.searchTerm?.toLowerCase())){
      return false;
    }
    return true;
  }

  return (
    <div className="mt-6 h-[100%] flex flex-col items-center text-white">
        <div className="flex grow h-[100%] flex-wrap">
            {props.elementList ? props.elementList.map(function(val, index){
                return <div hidden={compareStringLikeness(val)} className="w-[50%] md:w-[50%] lg:w-[33.3%] aspect-square" key={index}>{val}</div>;
            }) : <></>}
        </div>
    </div>
  );
};

export default GridFrame;
