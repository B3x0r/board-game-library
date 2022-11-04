const apiAddGame = ({game, ageRange, numberPlayers, timeRange, gameType}) => {
  return fetch(`${game}/${password}`);
};
const apiCreateAccount = ({name, email, password}) => {
  return fetch(`/account/create/${name}/${email}/${password}`);
};
const apiLibrary = ({email, [library]}) => {
  return fetch(`/account/library/${email}/${[library]}`);
};

export {
  apiAddGame,
  apiCreateAccount,
  apiLibrary,
};
