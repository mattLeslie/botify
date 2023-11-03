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

    res.redirect("http://localhost:3000/test");

    // Step 3: Use the access token to make requests to Spotify's API
    // For example, you can make a request to get the user's profile info:
  //   console.log("third req")
  //   const userProfile = await axios.get('https://api.spotify.com/v1/me', {
  //     headers: { 'Authorization': `Bearer ${access_token}` },
  //   });

  //   res.json({ access_token, refresh_token, user: userProfile.data });
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/test', async (req, res) =>{

  try{
   const userProfile = await axios.get('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
    });

    res.json({ ACCESS_TOKEN, REFRESH_TOKEN, user: userProfile.data });
  }
  catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
