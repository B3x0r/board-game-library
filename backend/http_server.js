var express = require("express");
var bodyParser = require('body-parser');
var path = require ("path");
var app = express();
var cors = require("cors");
var { addGame, getGame, all } = require("./dal-api")
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

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
app.get("/game/delete/:game_id", (req, res) => {
const {game_id} = req.params;
deleteGame(game_id)
  .then((game) => {
    res.send(game);
  })
  .catch((error) => {
    console.error(error);
  res.send({ success: false});
  })
    res.send("remove a game");
})

//update game
app.post("/game/update/:game_id", (req, res) => res.send("update a game"));

//get all games
app.get("/game/library", (req, res) => {
  all()
  .then((games) => {
    res.send(games);
  })
  .catch((error) => {
    console.error(error);
  res.send({ success: false});
});
})
//get a single game
app.get("/game/:game_id", (req, res) => {
const {game_id} = req.params;
getGame(game_id)
  .then((game) => {
    res.send(game);
  })
  .catch((error) => {
    console.error(error);
  res.send({ success: false});
  })
})

// catch all
app.get("*", function(req, res){
  res.send("page not found")
})

var port = process.env.PORT || 3030;
app.listen(port);
console.log("Running on port: " + port);
