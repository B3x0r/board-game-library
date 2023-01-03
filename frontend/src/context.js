import React from "react";
import {
  apiAddGame,
  apiRemoveDeleteGame,
  apiUpdateGame,
  apiLibrary,
} from "./dal";

const GameContext = React.createContext();
let gameLibrary = [];

const GameProvider = ({ children }) => {
  const addGame = (game, ageRange, numberPlayers, timeRange, gameType) => {
    const newGame = {
      game: game,
      ageRange: ageRange,
      numberPlayers: numberPlayers,
      timeRange: timeRange,
      gameType: gameType,
      gameID: gameID
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
    <GameContext.Provider
      value={{
        addGame,
        getLibrary,
        setLibrary,
        gameLibrary
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
