var express = require("express");
var path = require ("path");
var app = express();
var cors = require("cors");
var dal = require("./dal-api.js");
app.use(cors({ origin: process.env.PORT || "http://localhost:8080" }));

app.use(express.static(path.join(path.resolve(), "build")));

//add game
app.post("/game/add", (req, res) => res.send("add a game")) {
  game: req.body.game,
  ageRange: req.body.ageRange,
  numberPlayers: req.body.numberPlayers,
  timeRange: req.body.timeRange,
  gameType: req.body.gameType,
};

//delete game
app.post("/game/delete/:game_id", (req, res) => res.send("remove a game"));

//update game
app.post("/game/update/:game_id", (req, res) => res.send("update a game"));

//get all games
app.get("/game/library", (req, res) => res.send("get library"));

// catch all
app.get("*", function(req, res){
  res.send("page not found")
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Running on port: " + port);
