const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://MongoStandalone:RvGfX8jGDVVMY2y8@cluster0.acdj3.mongodb.net/?retryWrites=true&w=majority";
let db = null;

//connect to mongo
MongoClient.connect(url, {}, function (err, client) {
  console.log("Board Game Library DAL connected successfully to db server");
  console.log(err);
  //connect to my project database
  db = client.db("board-game-library-DAL");
});
//add game
function addGame({ game, ageRange, numberPlayers, timeRange, gameType }) {
  return new Promise((resolve, reject) =>
    db
    .collection("games")
    .insertOne({
      _id: game,
      ageRange,
      numberPlayers,
      timeRange,
      gameType,
    })
    .then(result => resolve(result))
    .catch(err => reject(err))
  );
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

function updateGames ({game}) {
  return new Promise((resolve, reject) =>{
    db.
      collection("games").updateOne(
        { game: game }
      )
    .then((result) => {
        resolve(result);
      }
    )
      .catch(reject)   
})
}

//all users data
// function all() {
//   return new Promise((resolve, reject) => {
//     db
//       .collection("users")
//       .find({})
//       .toArray()
//       .then((result) => {
//           resolve(result);
//       })
//       .catch(reject)
//     })
// };

module.exports = { addGame, updateGames };
