const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://rdurst:5Xz22AOp2HA@board-game-library.yzu7svr.mongodb.net/test";
let db = null;

//connect to mongo
MongoClient.connect(url, {}, function (err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log("Board Game Library DAL connected successfully to db server");
    //connect to my project database
    db = client.db("board-game-library-DAL");
    {
      if (err) {
        throw err;
      } else {
        console.log("success");
      }
    }
  }
});

//add game
function addGame({ game, ageRange, numberPlayers, timeRange, gameType }) {
  return new Promise((resolve, reject) =>
    db
      .collection("games")
      .insertOne({
        _id: gameIDNumber(),
        game,
        ageRange,
        numberPlayers,
        timeRange,
        gameType,
      })
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  );
}
//create gameID numbers
function gameIDNumber(game) {
  const gameID = Date.now() + Math.floor(Math.random() * 1000);
  return gameID;
}
// function verifyUser({ email, password }) {
//   return new Promise((resolve, reject) =>
//     db
//       .collection("users")
//       .find({
//         email,
//         password,
//       })
//       .toArray()
//       .then((result) => {
//         if (result.length == 1) {
//           resolve(result[0]);
//         } else {
//           reject();
//         }
//       })
//       .catch(reject)
//   );
// }

function updateGame({ game, ageRange, numberPlayers, timeRange, gameType, gameID }) {
  return new Promise((resolve, reject) => {
    console.log(gameID);
    db.collection("games")
      .updateOne({ _id: parseInt(gameID) }, {$set: {game, ageRange, numberPlayers, timeRange, gameType}})
      .then((result) => {
        resolve(result);
      })
      .catch(reject);
  });
}

//get single game data
function getGame(gameID) {
  return new Promise((resolve, reject) => {
    console.log("Game ID", gameID);
    db.collection("games")
      .find({ _id: parseInt(gameID) })
      .toArray()
      .then((result) => {
        console.log("result", result);
        resolve(result[0]);
      })
      .catch(reject);
  });
}

//delete single game data
function deleteGame(gameID) {
  return new Promise((resolve, reject) => {
    db.collection("games")
      .deleteOne({ _id: parseInt(gameID) })
      .then((result) => {
        resolve(result);
      })
      .catch(reject);
  });
}

//all game data
function all() {
  return new Promise((resolve, reject) => {
    db.collection("games")
      .find({})
      .toArray()
      .then((result) => {
        resolve(result);
      })
      .catch(reject);
  });
}

module.exports = { addGame, updateGame, getGame, deleteGame, all };
