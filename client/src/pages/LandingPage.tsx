import { useState } from "react";
import AuthButton from "../components/AuthButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPage = () => {

  const [revealTerms, setRevealTerms] = useState<boolean>(false);

  return (
    <main>
      <Header />
      <div className="w-[50%] flex flex-col justify-between m-auto h-screen">
        <div className="mt-[12%] rounded-2xl shadow-xl flex flex-col border-4 border-400-gray py-8 gap-y-20">
          <div className="font-bold text-4xl mx-auto">
            <span className="font-thin">Welcome to </span>Botify
          </div>
          <div className="font-thin text-xl ml-[25%] mr-auto flex flex-col gap-y-4">
            <p>You can: </p>
            <p>&bull; Manage your owned and collaborative Spotify playlists</p>
            <p>&bull; Customize your playlist behavior</p>
            <div className="flex items-center">
              <input className="mr-4 h-4 w-4" type="checkbox" id="terms" name="terms" />
              <p className="relative">I agree to the&nbsp;
                <span className="cursor-pointer font-thin underline hover:text-green-400"
                  onMouseEnter={() => { setRevealTerms(true) }}
                  onMouseLeave={() => { setRevealTerms(false) }}
                >
                  terms and conditions.
                </span>
                {revealTerms ? <div className="top-[100%] pt-2 absolute flex flex-col font-thin">
                  <p>&bull; Don't spam API requests!</p>
                  <p>&bull; Have fun :)</p>
                </div> : <></>}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <AuthButton />
          </div>
          <div className="cursor-pointer hover:underline font-thin mx-auto text-xs">Feedback?</div>

        </div>
        <Footer />
      </div>
    </main>
  );
}

export default LandingPage;