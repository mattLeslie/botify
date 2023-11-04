// displays playlist image and title
// internally contains the playlist id

type PlaylistCardProps = {
    id: string;
    title: string;
    image_url: string;
}

const PlaylistCard = (props: PlaylistCardProps) => {
  
    return (
    <div className='w-[100%]'>
      <img src={props.image_url}></img>
    </div>
    );
  };
  
  export default PlaylistCard;
  
  
  
  