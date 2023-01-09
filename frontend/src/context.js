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
  const addGame = ({ game, ageRange, numberPlayers, timeRange, gameType, gameID }) => {
    const newGame = {
      game: game,
      ageRange: ageRange,
      numberPlayers: numberPlayers,
      timeRange: timeRange,
      gameType: gameType,
      gameID: gameID
    };
    apiAddGame(newGame);
  };

  const getLibrary = () => {
    return apiLibrary()
      .then(async (result) => {
        gameLibrary = await result.json();
        return gameLibrary;
      })
      .catch((err) => console.error(err));
  };

  return (
    <GameContext.Provider
      value={{
        addGame,
        getLibrary,
        gameLibrary
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
