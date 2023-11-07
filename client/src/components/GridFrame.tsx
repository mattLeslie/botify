import { createRef, useRef, useState } from "react";

type GridFrameProps = {
    // sorted array
    elementList: any[];
}
const GridFrame = (props: GridFrameProps) => {

  return (
    <div className="mt-6 flex flex-col items-center text-white">
        <div className="flex flex-wrap">
            {props.elementList ? props.elementList.map(function(val, index){
                return <div className="w-[50%] md:w-[50%] lg:w-[33.3%] aspect-square" key={index}>{val}</div>;
            }) : <></>}
        </div>
    </div>
  );
};

export default GridFrame;
