import { createRef, useRef, useState } from "react";

type GridFrameProps = {
    // sorted array
    elementList: any[];
}
const GridFrame = (props: GridFrameProps) => {

  return (
    <div className="mt-12 flex flex-col items-center text-white">
        <div className="w-[90%] flex flex-wrap">
            {props.elementList.map(function(val, index){
                return <div className="w-[100%] md:w-[50%] lg:w-[33.3%]" key={index}>{val}</div>;
            })}
        </div>
    </div>
  );
};

export default GridFrame;
