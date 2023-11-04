const AuthButton = () => {
  const handleAuthorization = async () => {
    try {
        const scopes = "user-read-private user-read-email playlist-read-private playlist-read-collaborative"
        const url = `https://accounts.spotify.com/authorize?client_id=97ab3543c0a34e20b7d6e1032addff22&response_type=code&redirect_uri=http://localhost:5000/callback&scope=${scopes}`
        window.open(url,"_self")
        } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleAuthorization}>Authorize with Spotify</button>
  );
};

export default AuthButton;



