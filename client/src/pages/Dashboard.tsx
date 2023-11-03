import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import GridFrame from "../components/GridFrame";
import PlaylistCard from "../components/PlaylistCard";


const Dashboard = () => {

  const [playlistCards, setPlaylistCards] = useState<any>(null);

  useEffect(() => {
    fetchPlaylistData();
  }, []);

  const fetchPlaylistData = async () =>{
    try{
      const response = await fetch('/getAllUserPlaylists');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      massagePlaylistData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // extract only the data required to create the
  // playlist cards, then populate the card array
  const massagePlaylistData = (jsonData: any) => {

    // items contains each playlist owned by user
    const { playlists : {items} } = jsonData;

    const playlistArray = items.map((item: any) => {
      const img_url = item.images[0].url;
      const title = item.name;
      const id = item.id;
      return <PlaylistCard id={id} title={title} image_url={img_url}/>;
    })
    setPlaylistCards(playlistArray);
  }
  
  return (      
    <main>
        <div>
            {!playlistCards ? <MoonLoader/> :
              <GridFrame elementList={playlistCards}/>
            }
        </div>
    </main>
  );
}

export default Dashboard;