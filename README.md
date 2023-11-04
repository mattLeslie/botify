## Brainstorm:

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