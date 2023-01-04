var express = require("express");
var path = require ("path");
var app = express();
var cors = require("cors");
var { addGame } = require("./dal-api")
var dal = require("./dal-api.js");
app.use(cors({ origin: process.env.PORT || "http://localhost:8080" }));

app.use(express.static(path.join(path.resolve(), "build")));

//add game
app.post("/game/add", (req, res) => {
  console.log(req.body);
  const record = {
    game: req.body.game,
    ageRange: req.body.ageRange,
    numberPlayers: req.body.numberPlayers,
    timeRange: req.body.timeRange,
    gameType: req.body.gameType,
    gameID: req.body.gameID
  }
  addGame(record)
    .then(result => res.send(result))
    .catch(error => req.send(error));
  })

//delete game
app.post("/game/delete/:game_id", (req, res) => res.send("remove a game"));

//update game
app.post("/game/update/:game_id", (req, res) => res.send("update a game"));

//get all games
app.get("/game/library", (req, res) => {
  dal
  .all()
  .then((docs) => {
    res.send("get library");
  })
  .catch(() => {
  res.send({ success: false});
});
})

// catch all
app.get("*", function(req, res){
  res.send("page not found")
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Running on port: " + port);
