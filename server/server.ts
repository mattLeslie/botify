const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({origin: 'http://localhost:3000', credentials: true}));

var ACCESS_TOKEN = "";
var REFRESH_TOKEN = "";


// Routes
app.get('/callback', async (req, res) => {
  const code = req.query.code;

  // Step 2: Exchange the authorization code for an access token
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = new URLSearchParams();
  data.append('grant_type', 'authorization_code');
  data.append('code', code);
  if(process.env.REDIRECT_URI == undefined){process.env.REDIRECT_URI = "http://localhost:5000/callback"}
  data.append('redirect_uri', process.env.REDIRECT_URI);

  const authHeader = `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`;

  try {
    const response = await axios.post(tokenUrl, data, {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token, refresh_token } = response.data;
    ACCESS_TOKEN = access_token;
    REFRESH_TOKEN = refresh_token;

    res.redirect("http://localhost:3000/dashboard");

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// TODO: don't return until all data has been retrieved 
// (max request limit is 50)
app.get('/getAllUserPlaylists', async (req, res) =>{

  const url = `https://api.spotify.com/v1/me/playlists?offset=0&limit=${process.env.PL_LIMIT}`;
  const allUserPlaylists = await makeAPICall(url, res);
  res.json({ playlists: allUserPlaylists.data });

});


// TODO: don't return until all data has been retrieved 
// (max request limit is 100 I think?)
app.get('/getPlaylistTracks', async (req, res) =>{
  const url = `https://api.spotify.com/v1/playlists/${req.query.id}/tracks`;
  const playlistTracks = await makeAPICall(url, res);
  res.json({ playlistTracks: playlistTracks.data });

});



const makeAPICall = async function(url, res){
  try{
    const payload = await axios.get(url, {
       headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
     });
 
     return payload;
   }
   catch (error) {
     console.error('Error:', error.response?.data || error.message);
     res.status(500).json({ error: 'Internal Server Error' });
   }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
