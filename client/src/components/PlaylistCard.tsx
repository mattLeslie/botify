// displays playlist image and title
// internally contains the playlist id

type PlaylistCardProps = {
    id: string;
    title: string;
    image_url: string;
}

const PlaylistCard = (props: PlaylistCardProps) => {
  
    return (
      <div>
        <img src={props.image_url}/>
        <p>{props.title}</p>

      </div>
    );
  };
  
  export default PlaylistCard;
  
  
  
  