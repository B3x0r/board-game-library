var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var cors = require("cors");
var { addGame, updateGame, getGame, all, deleteGame } = require("./dal-api");
app.use(cors({ origin: process.env.PORT || "http://localhost:3000" }));
app.use(bodyParser.json());

app.use(express.static(path.join(path.resolve(), "public")));

//add game
app.post("/game/add", (req, res) => {
  const record = {
    game: req.body.game,
    ageRange: req.body.ageRange,
    numberPlayers: req.body.numberPlayers,
    timeRange: req.body.timeRange,
    gameType: req.body.gameType,
    gameID: req.body.gameID,
  };
  addGame(record)
    .then((result) => res.send(result))
    .catch((error) => req.send(error));
});

//delete game
app.delete("/game/delete/:game_id", (req, res) => {
  const { game_id } = req.params;
  deleteGame(game_id)
    .then((game) => {
      res.send(game);
    })
    .catch((error) => {
      console.error(error);
      res.send({ success: false });
    });
});

//update game
app.post("/game/update/:game_id", (req, res) => {
  const { game_id } = req.params;
  const record = {
    game: req.body.game,
    ageRange: req.body.ageRange,
    numberPlayers: req.body.numberPlayers,
    timeRange: req.body.timeRange,
    gameType: req.body.gameType,
    gameID: game_id,
  };
  updateGame(record)
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

//get all games
app.get("/game/library", (req, res) => {
  all()
    .then((games) => {
      res.send(games);
    })
    .catch((error) => {
      console.error(error);
      res.send({ success: false });
    });
});
//get a single game
app.get("/game/:game_id", (req, res) => {
  const { game_id } = req.params;
  getGame(game_id)
    .then((game) => {
      res.send(game);
    })
    .catch((error) => {
      console.error(error);
      res.send({ success: false });
    });
});

// catch all
//app.get("*", function (req, res) {
//  res.send("page not found");
//});

var port = process.env.PORT || 3030;
app.listen(port);
console.log("Running on port: " + port);
