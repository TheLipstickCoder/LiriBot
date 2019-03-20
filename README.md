# LiriBot

Welcome to Ore's LiriBot!

In order to use this app successfully, you will need to do a few things.

First, create your own .env file.

This app will allow you, as the user, to use the BandsInTown API to see concerts in your area and Spotify to pull song data.

While the app is not fully functional now, it should do the following based on the commands below:

 - concert-this *Band Name or Artist here* will return information from BandsInTown using the axios package to display upcoming events to the client. 
 ![picture](/concert-this.png)

- spotify-this *Song name here* will return information from Spotify using the axios package to display the artist, album, and a preview link of the song.
![picture](/spotify-this.png)

- movie-this *Movie Title here* will return information using the OMDB API using the axios package to display the following:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie
![picture](/movie-this.png)

- do-what-it-says will use the fs package to run an API call based on information stored in the random.txt file
![picture](/do-what-it-says.png)