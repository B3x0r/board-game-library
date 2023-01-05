const apiAddGame = ({game, ageRange, numberPlayers, timeRange, gameType}) => {
  return fetch("/game/add", {
    method:"POST",
  headers: {
    'Content-Type':'application/json'
  },
  body: JSON.stringify({
    game,
    ageRange,
    numberPlayers,
    timeRange,
    gameType
    })
  });
};
const apiDeleteGame = ({gameID}) => {
  return fetch(`/game/delete/${gameID}`, {
    method:"POST"});
};
const apiUpdateGame = ({game, ageRange, numberPlayers, timeRange, gameType, gameID}) => {
  return fetch(`/game/update/${gameID}`, {method:"POST"});
};
const apiLibrary = () => {
  return fetch(`/game/library`);
};

export {
  apiAddGame,
  apiDeleteGame,
  apiUpdateGame,
  apiLibrary,
};
