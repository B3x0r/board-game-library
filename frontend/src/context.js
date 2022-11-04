import React from "react";
import {
  apiAddGame,
  apiGetGameLibrary,
  //apiRemoveGame,
} from "./dal";

const UserContext = React.createContext();

const UserProvider = ( {children} ) => {
  const [user, setUser] = React.useState({});
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  const [userArray, setUserArray] = React.useState([]);

  const addGame = (game, ageRange, numberPlayers, timeRange, gameType) => {
    const newGame = {
      game: game,
      ageRange: ageRange,
      numberPlayers: numberPlayers,
      timeRange: timeRange,
      gameType: gameType,
    };
    apiAddGame(newGame);
    pushGame(newGame);
  };

  const pushGame = (newGame) => {
    userArray.push(newGame);
    setGameLibrary(gameLibrary);
  };
    const getGameLibrary = () => {
      return apiGetGameLibrary()
      .then(async result => {
        const user = await result.json();
        setGameLibrary(newGame)
      })
      .catch(err => console.error(err))
    };
  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedin,
        setIsLoggedin,
        validateLogin,
        createAccount,
        getAllData,
        userArray,
      }}
    >
    {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
