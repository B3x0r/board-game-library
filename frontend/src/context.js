import React from "react";
import {
  apiAddGame,
  apiRemovDeleteGame,
  apiUpdateGame,
  apiLibrary,
} from "./dal";

const UserContext = React.createContext();
const gameLibrary = [];

const UserProvider = ({ children }) => {
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
    gameLibrary.push(newGame);
    setLibrary(gameLibrary);
  };
  const getLibrary = () => {
    return apiLibrary()
      .then(async (result) => {
        gameLibrary = await result.json();
      })
      .catch((err) => console.error(err));
  };
  const setLibrary = () => {
    //TODO
  }
  return (
    <UserContext.Provider
      value={{
        addGame,
        getLibrary,
        setLibrary,
        gameLibrary
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
