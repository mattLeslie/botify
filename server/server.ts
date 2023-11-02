const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({origin: 'http://localhost:3000', credentials: true}));

// Spotify API credentials
const CLIENT_ID = '97ab3543c0a34e20b7d6e1032addff22';
const CLIENT_SECRET = '6312ad623911499d90dfde2eb32a00df';
const REDIRECT_URI = 'http://localhost:5000/callback'; // Update with your redirect URI

// Routes
app.get('/callback', async (req, res) => {
  const code = req.query.code;

  // Step 2: Exchange the authorization code for an access token
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = new URLSearchParams();
  data.append('grant_type', 'authorization_code');
  data.append('code', code);
  data.append('redirect_uri', REDIRECT_URI);

  const authHeader = `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`;

  try {
    console.log("second request");

    const response = await axios.post(tokenUrl, data, {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token, refresh_token } = response.data;

    // Step 3: Use the access token to make requests to Spotify's API
    // For example, you can make a request to get the user's profile info:
    console.log("third request");

    const userProfile = await axios.get('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': `Bearer ${access_token}` },
    });

    res.json({ access_token, refresh_token, user: userProfile.data });
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
