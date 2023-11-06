import { useEffect, useState } from "react";
import GridFrame from "../components/GridFrame";
import PlaylistCard from "../components/PlaylistCard";
import PlaylistControl from "./PlaylistControl";
import Playlist from "../types/Playlist";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import Header from "../components/Header";


const Dashboard = () => {

  const [playlistCards, setPlaylistCards] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState<any>(null);

  useEffect(() => {
    fetchPlaylistData();
  }, []);

  const fetchPlaylistData = async () => {
    console.log("Fetching user playlists...")
    try {
      const response = await fetch('/getAllUserPlaylists');
      if (!response.ok) {
        throw new Error('Network response was not ok. Code: ' + response.status);
      }
      const jsonData = await response.json();
      massagePlaylistData(jsonData);
    } catch (error) {
      console.error('Error:', error);
      setError(true);
    }
  }

  // extract only the data required to create the
  // playlist cards, then populate the card array
  const massagePlaylistData = (jsonData: any) => {

    // items contains each playlist owned by user
    const { playlists: { items } } = jsonData;

    // console.log(items)

    const playlistArray = items.map((item: any) => {
      let playlist = {} as Playlist;
      playlist.image_url = item.images[0].url;
      playlist.name = item.name;
      playlist.id = item.id;

      return <PlaylistCard playlist={playlist} selectCard={setSelectedPlaylist} />;
    })
    setPlaylistCards(playlistArray);
  }


  return (
    <main>
      <Header />
      <div className="w-[66%] h-screen m-auto">
        {error ? <div className="mt-12">Error loading page! Refresh and try again.</div> :
          <div>
            {!playlistCards ? <Spinner size={150} /> :
              <div className="w-[100%] m-auto">
                <div hidden={selectedPlaylist ? true : false}>
                  <GridFrame elementList={playlistCards} />
                </div>
                {!selectedPlaylist ?
                  <></>
                  :
                  <PlaylistControl goBack={setSelectedPlaylist} playlist={selectedPlaylist} />
                }
              </div>
            }
          </div>
        }
      </div>
      <div className="w-[66%] m-auto">
        <Footer></Footer>
      </div>

    </main>
  );
}

export default Dashboard;