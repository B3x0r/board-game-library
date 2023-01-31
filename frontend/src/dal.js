const serverURL = {
  development: "http://localhost:3030",
};
const env = process.env.NODE_ENV || "development";
const apiAddGame = ({ game, ageRange, numberPlayers, timeRange, gameType }) => {
  return fetch(serverURL[env] + "/game/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      game,
      ageRange,
      numberPlayers,
      timeRange,
      gameType,
    }),
  });
};
const apiDeleteGame = (gameID) => {
  return fetch(`${serverURL[env]}/game/delete/${gameID}`, { method: "DELETE" });
};

const apiGetGame = (gameID) => {
  return fetch(`${serverURL[env]}/game/${gameID}`);
};

const apiEditGame = ({
  game,
  ageRange,
  numberPlayers,
  timeRange,
  gameType,
  gameID,
}) => {
  return fetch(`${serverURL[env]}/game/update/${gameID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      game,
      ageRange,
      numberPlayers,
      timeRange,
      gameType,
      gameID,
    }),
  });
};

const apiLibrary = () => {
  return fetch(`${serverURL[env]}/game/library`);
};

export { apiAddGame, apiDeleteGame, apiGetGame, apiEditGame, apiLibrary };
