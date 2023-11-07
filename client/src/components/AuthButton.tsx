const AuthButton = () => {
  const handleAuthorization = async () => {
    try {
        const scopes = "user-read-private \
                        user-read-email \
                        playlist-read-private \
                        playlist-read-collaborative \
                        playlist-modify-private \
                        playlist-modify-public"
        const url = `https://accounts.spotify.com/authorize?client_id=97ab3543c0a34e20b7d6e1032addff22&response_type=code&redirect_uri=http://localhost:5000/callback&scope=${scopes}`
        window.open(url,"_self")
        } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div onClick={handleAuthorization}
         className="cursor-pointer rounded-xl flex justify-center w-[50%] bg-[#1ed760] hover:scale-105 hover:bg-[#1fdf64] active:bg-[#169c46]">
      <div className="flex flex-col justify-center py-4">
        <div onClick={handleAuthorization}>Log In with Spotify</div>
      </div>
    </div>
  );
};

export default AuthButton;