// displays Track details

import { useState } from "react";
import Track from "../types/Track";
import moment from 'moment';
moment().format();

type TrackCardProps = {
    track: Track;
    deleteTrack: ()=>any;
}


const TrackCard = (props: TrackCardProps) => {

    const [deleted, setDeleted] = useState<boolean>(false)

    const handleDelete = () =>{
        if(!window.confirm("Are you sure you want to delete this track?")){
            return;
        }    
        props.deleteTrack();
        setDeleted(true);
    }

    const calculateDiff = () => {
        let now = moment();
        let start = props.track.added_at;

        let diff = now.diff(start);
        let duration = moment.duration(diff);
        let hours_str = duration.asHours().toFixed(0);

        let hours: number = +hours_str;
        let days_str: string = (hours / 24).toFixed(0);
        let days: number = + days_str;
        hours = hours % 24;

        let retString: string = "";
        if (days > 0) {
            retString += days + " days"
        }
        if (hours > 0) {
            if (days > 0) { retString += ", " }
            retString += hours + " hours"
        }
        if(hours < 0 && days < 0) {
            retString += "< an hour"
        }
        return retString + " ago";
    }

    return (
        <div hidden={deleted} className='w-[100%] m-auto min-h-[30%] max-h-[50%] overflow-hidden'>

            <div className="w-[100%] h-[100%] m-auto z-20">
                <div className="flex h-[100%] w-[100%]">
                    <img className="h-[100%] border-r-2 border-200-gray object-scale-down" src={props.track.album.image_url} />
                    <div className="w-[100%] px-2 py-1 flex flex-col">
                        <div className="h-[100%] line-clamp-1">{props.track.name}</div>
                        <div className="h-[100%] line-clamp-1 font-thin">{props.track.artists[0].name} {props.track.artists.length > 1 ? <span className="text-xs">& {props.track.artists.length} others...</span> : <></>}</div>
                        <div className="h-[100%] line-clamp-1 font-thin">{props.track.album.name}</div>
                    </div>
                    <div className="w-[100%] px-2 py-1 flex flex-col">
                        <div className="h-[100%] font-thin"></div>
                        <div className="h-[100%] line-clamp-1 font-thin">Added by {props.track.added_by}</div>
                        <div className="h-[100%] line-clamp-1 font-thin">{calculateDiff()}</div>
                    </div>
                    <div onClick={handleDelete} className="flex items-center mx-2">
                        <div className="cursor-pointer flex flex-col items-center border-2 border-red-200 rounded-lg 
                                        text-center hover:bg-red-200 text-red-300 p-1 hover:text-red-500 active:opacity-50 transition">
                            <div className="font-light text-[24px]">&#9253; </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackCard;



