const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

var ACCESS_TOKEN = "";
var REFRESH_TOKEN = "";

// Routes
app.get('/callback', async (req, res) => {
  console.log("starting auth sequence...")
  const code = req.query.code;

  // Step 2: Exchange the authorization code for an access token
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = new URLSearchParams();
  data.append('grant_type', 'authorization_code');
  data.append('code', code);
  if (process.env.REDIRECT_URI == undefined) { process.env.REDIRECT_URI = "http://localhost:5000/callback" }
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
app.get('/getAllUserPlaylists', async (req, res, next) => {
  console.log("calling /getAllUserPlaylists...")
  const url = `https://api.spotify.com/v1/me/playlists?offset=0&limit=${process.env.PL_LIMIT}`;
  try {
    const payload = await axios.get(url, {
      headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
    });
   
    res.json({ playlists: payload.data });
  } catch (err) {
    next(err)
  }

});


// TODO: don't return until all data has been retrieved 
// (max request limit is 100 I think?)
app.get('/getPlaylistTracks', async (req, res, next) => {
  console.log(`calling /getPlaylistTracks on id=%s...`, req.query.id)
  const url = `https://api.spotify.com/v1/playlists/${req.query.id}/tracks`;
  try {
    const payload = await axios.get(url, {
      headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
    });
    res.json({ playlistTracks: payload.data });

  } catch (err) {
    next(err)
  }
});


app.post('/removeTracks', async (req, res, next) => {
  console.log(`calling /removeTracks...`);

  var data = JSON.parse(req.query.tracks)

  const url = `https://api.spotify.com/v1/playlists/${req.query.id}/tracks`;
  try {
    const payload = await axios.delete(url, {
      headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}`,
                  'Content-Type': 'application/json'},
      data
    });
    res.status(200);
    res.json({payload: payload.data });

  } catch (err) {
    next(err)
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  // Handle the error here
  console.error('Error:', err.response || err.message);
  if(err.response.status == 429){
    const headers = err.response.headers;
    console.log(headers)
  }
  // You can send a custom error response to the client
  res.status(500).json({ error: err });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
