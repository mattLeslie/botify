// displays playlist image and title
// internally contains the playlist id

type PlaylistCardProps = {
    id: string;
    title: string;
    image_url: string;
}

const PlaylistCard = (props: PlaylistCardProps) => {
  
    return (
    <div className='w-[100%] mb-10  z-10 transition-all delay-50 hover:-translate-y-5 hover:scale-110 group/card cursor-pointer clickable'>
        <div className="flex flex-col">
            <div className="flex justify-center w-[100%]">
              <div className="relative w-[90%] h-44 rounded-2xl overflow-hidden flex items-center">
                  <div className="bg-black text-xs p-2 rounded-lg text-white absolute z-10 top-3 left-3 flex items-center">
                      <p>{props.title}</p>
                  </div>
                  <img className="aspect-[4/3] object-cover" alt="" src={props.image_url}/>
              </div>
            </div>
            <div className="flex justify-center w-[100%]">
              <p className="group-hover/card:underline w-[90%] items-left text-2xl font-bold pt-2 pb-1">hello</p>
            </div>
            <div className="flex justify-center w-[100%]">
              <p className="w-[90%] items-left text-gray-400">test</p>
            </div>
          </div>
      </div>
    );
  };
  
  export default PlaylistCard;
  
  
  
  