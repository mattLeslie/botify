// displays playlist image and title
// internally contains the playlist id

type PlaylistCardProps = {
    id: string;
    title: string;
    image_url: string;
}

const PlaylistCard = (props: PlaylistCardProps) => {
  
    return (
      <div className='w-[100%] h-[100%] m-auto'>
        <div className="w-[90%] rounded-2xl shadow-2xl overflow-hidden h-[90%] m-auto z-20 transition-all delay-50 hover:scale-110 group/card cursor-pointer clickable">
            <div className="flex justify-center w-[100%] h-[100%]">
              <div className="relative w-[100%] max-h-[100%] flex items-center ">
                  <div className="bg-black text-xs p-2 rounded-lg text-white absolute z-10 bottom-3 right-3 flex items-center">
                      <p>{props.title}</p>
                  </div>
                  <img className="w-[100%] h-[100%] object-scale-down" src={props.image_url}/>
              </div>
            </div>
          </div>
      </div>
    );
  };
  
  export default PlaylistCard;
  
  
  
  