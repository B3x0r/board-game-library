import React from "react";
import {
  apiAddGame,
  apiGetGame,
  apiEditGame,
  apiDeleteGame,
  apiLibrary,
} from "./dal";

const GameContext = React.createContext();
let gameLibrary = [];

const GameProvider = ({ children }) => {
  const addGame = ({
    game,
    ageRange,
    numberPlayers,
    timeRange,
    gameType,
    gameID,
  }) => {
    let newGame = {
      game: game,
      ageRange: ageRange,
      numberPlayers: numberPlayers,
      timeRange: timeRange,
      gameType: gameType,
      gameID: gameID,
    };
    apiAddGame(newGame);
  };

  const getGame = (gameID) => {
    return apiGetGame(gameID)
      .then(async (result) => {
        return await result.json();
      })
      .catch((err) => console.error(err));
  };

  const editGame = ({
    game,
    ageRange,
    numberPlayers,
    timeRange,
    gameType,
    gameID,
  }) => {
    let newGame = {
      game: game,
      ageRange: ageRange,
      numberPlayers: numberPlayers,
      timeRange: timeRange,
      gameType: gameType,
      gameID: gameID,
    };
    apiEditGame(newGame);
  };

  const deleteGame = (gameID) => {
    return apiDeleteGame(gameID)
      .then(async (result) => {
        return await result.json();
      })
      .catch((err) => console.error(err));
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
        getGame,
        editGame,
        deleteGame,
        getLibrary,
        gameLibrary,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
