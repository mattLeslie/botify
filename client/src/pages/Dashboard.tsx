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
      <div className="w-[66%] flex flex-col justify-between m-auto h-screen">
        {selectedPlaylist ? <PlaylistControl goBack={setSelectedPlaylist} playlist={selectedPlaylist} />
          :
          <></>
        }

        <div hidden={selectedPlaylist ? true : false}>
          <div className="mt-[6%] rounded-2xl shadow-xl flex flex-col border-2 border-400-gray py-8">
            <div className="w-[100%] text-center">
              <div className="font-thin text-4xl mx-auto border-b-2 border-200-gray pb-6">
                Select a Playlist 
              </div>
            </div>
            <div className="flex flex-row justify-between w-[90%] m-auto">
              <div className="mt-4 py-2 rounded-2xl border-2 border-200-gray font-thin text-lg text-center px-12 mr-auto">
                Search <span className="pl-1 text-2xl">&#x2315;</span>
              </div>
              <div className="cursor-pointer mt-4 py-2 rounded-2xl border-2 border-200-gray font-thin text-lg px-8 text-center ml-auto">
                Filter &#x2442;
              </div>
            </div>
            <div className="m-auto">
              {error ? <div className="mt-12">Error loading page! Refresh and try again.</div> :
                <div>
                  {!playlistCards ? <Spinner size={150} /> :
                    <div className="w-[90%] m-auto">
                      <div hidden={selectedPlaylist ? true : false}>
                        <GridFrame elementList={playlistCards} />
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          </div>

        </div>
        <div className="w-[100%] m-auto mt-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;