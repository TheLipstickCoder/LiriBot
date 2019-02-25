require("dotenv").config();

//Used YouTube, MDN, StackOverflow, and GitHub for assistance

var fs = require("fs")
//req npm package
var request = require("request");
//gets Spotify API info from keys.js file via the relative path
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")

var command = process.argv[2];
var userRequest = process.argv[3];

//using swich case to change between commands

switch(command) {
    case "concert-this":
        runBands();
        break;
    case "spotify-this-song":
        runSpot();
        break;
    case "movie-this":
        runMovie();
        break;
    case "do-what-it-says":
        runSays();
        break;
}

//function for BandsInTown
function runBands(userRequest) {
    if (userRequest === "") {
        console.log("Please enter an artist to search")
    } else {
        axios.get("https://rest.bandsintown.com/artists/" + userRequest + "/events?app_id=codingbootcamp").then(
        function (response) {
           if(response.data.length <= 0) {
               console.log("No info for this Artist")
           }else {
            for(var i=0; i < response.data.length; i++) {


//NEEDED THE ASSISTANCE OF ANOTHER REPO FOR THIS PORTION
                var currData = `\n
    Venue: ${response.data[i].venue.name}
    Location: ${response.data[i].venue.city + ", " + response.data[0].venue.region}
    Event Date: ${moment(show.datetime).format("MM/DD/YYYY")}
            `
            console.log(currData)
            }
           }
        }
    );
    }
};

//function for Spotify
function runSpot(userRequest) {

    if (userRequest === "") {
        userRequest = "Black Effect"
    }

    spotify.search({
        type: 'artist,track',
        query: userRequest
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var songInfo = data.tracks.items;
	        console.log("The artist is " + songInfo[0].artists[0].name);
	        console.log("The name of this song is " + songInfo[0].name);
	        console.log("Hear this song at " + songInfo[0].preview_url);
	        console.log("This song can be found on  " + songInfo[0].album.name);
});
};

//FUNCTION FOR MOVIES
var runMovie = function(userReq) {
    if (userReq === undefined) {
      userReq = 'Crooklyn';
    }
  
    var queryURL =
      "http://www.omdbapi.com/?t=" + userReq + "&y=&plot=full&tomatoes=true&apikey=trilogy";
  
    axios.get(queryURL).then(
      function(response) {
        var movieDetails = response.data;
  
        console.log("Title: " + movieDetails.Title);
        console.log("Year: " + movieDetails.Year);
        console.log("Rated: " + movieDetails.Rated);
        console.log("IMDB Rating: " + movieDetails.imdbRating);
        console.log("Country: " + movieDetails.Country);
        console.log("Language: " + movieDetails.Language);
        console.log("Plot: " + movieDetails.Plot);
        console.log("Actors: " + movieDetails.Actors);
        console.log("Rotten Tomatoes Rating: " + movieDetails.Ratings[1].Value);
      }
    );
  };