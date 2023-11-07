# Botify

The purpose of this project is to provide a web interface for myself (and other users, I guess) to control a Spotify bot that enhances control over personal and shared playlists. The primary feature I'm interested in creating is:

1. having an auto-refreshing shared playlist, such that songs on the playlist only exist for a user-defined period of time. 

* My idea here is to allow for a way to share music that bridges the gap between a traditional shared playlist (which can grow big and cumbersome) and a direct message containing a song link (which I sometimes forget to open and can be annoying to track down later).
* Think of this as a sort of "Friend-curated discover daily/weekly/monthly etc."

Other features may follow, hence the single entry list.

Eventually I'd like to use this project as a base for a secondary app integrated with Echo smart speakers that enables users to listen to a curated queue. 



## How to run locally

1. You'll first need to create a Spotify app on the Spotify for Developers site (https://developer.spotify.com/dashboard). You can follow the instructions there.
2. Make sure that under your app's settings you have set:
* Website       -> http://localhost:3000
* Redirect URIs -> http://localhost:5000/callback
* *note these can actually be whatever you'd like, just make sure you update your environment variables accordingly*
3. Clone the repo
4. Create a .env file in the root directory and paste inside: 
```
# Friend-Curation app id
CLIENT_ID="*replace with your app's id*"

# Friend-Curation app secret key
CLIENT_SECRET=*replace with your app's secret*

# The url that Spotify will redirect back to after authorization
# NOTE: this must be in the allowed list on the Spotify app dashboard
# NOTE: this url must be consistent across authorization requests
REDIRECT_URI="*should be the same redirect uri from step 2*"

# Maximum number of playlists returned in payload from single
# Spotify API call. Range: 1-50
PL_LIMIT=6
```
5. Navigate to botify/client/ and run `npm run start` to start the react client. It should hopefully open in browser.
6. In a separate terminal window, navigate to botify/server/ and run `node server.ts` to start the express server. You should get a message in your terminal that the server has started.
7. Great work! The application should be running locally and you'll be able to use it if you've set up your environment variables correctly. 

## Planning and Brainstorming:

### Problem 1: Need a way to schedule the bot to run at regular intervals

Possible solution: node-cron
Alternative: aws lambda?


###### Subproblem 1.1: How to support multiple bots and playlists?
Eventually need a database to keep track of user preferences
for different playlists

(now that I think about it I might need that very soon)

###### Subproblem 1.2: Need to set up a consistent server
Will eventually need a dedicated cloud server instead of my laptop
(I don't really want to be running it all the time on my machine)

in the meantime I need to set up the cron job to recover on server
startup... shouldn't be a huge problem since the bot will validate
against current spotify data



## TODO:
0. !!!IMPORTANT: Find a way to avoid hitting the rate limit! (The penalty box is no fun)
    * As of 11/6:
    - Caching track data on the dashboard to limit API calls
    - Upgraded server output logs
1. ~~Stop my node server from crashing all the time~~
2. ~~Style login page~~
3. ~~Center and embiggen loading spinners~~
4. Allow songs to be deleted from playlists
5. Create the bot dashboard
6. Add bot dashboard functionality
7. Restyle playlist selection dashboard
8. Apply consistent theming to whole app
9. Make sure all data is being retrieved from API calls (side note: probably want to limit this to user input for songs etc.)
10. Process playlist data to make sure that only playlists eligible for Botify are displayed (personally owned or collaborative)
11. Make playlist dashboard loading snappier (stop using useEffect and render the elements we already know first, use spinner for song list)
12. Add scroll to top when playlist dashboard is shown
13. Make t&c button required on login page

