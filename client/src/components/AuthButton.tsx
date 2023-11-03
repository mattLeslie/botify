const AuthorizationButton = () => {
  const handleAuthorization = async () => {
    try {
        const url = `https://accounts.spotify.com/authorize?client_id=97ab3543c0a34e20b7d6e1032addff22&response_type=code&redirect_uri=http://localhost:5000/callback&scope=user-read-private%20user-read-email`
        window.open(url,"_self")
        } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleAuthorization}>Authorize with Spotify</button>
    </div>
  );
};

export default AuthorizationButton;



