const apiAddGame = ({game, ageRange, numberPlayers, timeRange, gameType}) => {
  return fetch("/game/add", {method:"POST"});
};
const apiDeleteGame = ({game_id}) => {
  return fetch(`/game/delete/${game_id}`, {method:"POST"});
};
const apiUpdateGame = ({game, ageRange, numberPlayers, timeRange, gameType, game_id}) => {
  return fetch(`/game/update/${game_id}`, {method:"POST"});
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