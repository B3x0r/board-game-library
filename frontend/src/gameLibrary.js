import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { GameContext } from "./context";

function GetGameLibrary() {
  const [gameList, setGameList] = React.useState([]);
  const { gameLibrary, getLibrary } = React.useContext(GameContext);

  getLibrary();

  function gameTypeCap(gameType) {
    for (let i = 0; i < gameType.length; i++) {
      gameType[i] = gameType[i][0].toUpperCase() + gameType[i].substr(1);
    }
    return gameType;
  }

  useEffect(() => {
    getLibrary().then((list) => setGameList(list));
  }, []);

  return (
    <div>
      <h3>Game Library</h3>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Game</th>
              <th scope="col">Age Range</th>
              <th scope="col">Number of Players</th>
              <th scope="col">Average Play Time in Minutes</th>
              <th scope="col">Game Type</th>
              <th scope="col">Game ID</th>
            </tr>
          </thead>
          <tbody>
            {gameList.map((game, index) => (
              <tr key={index}>
                <td>{game.game}</td>
                <td>{game.ageRange}</td>
                <td>{game.numberPlayers}</td>
                <td>{game.timeRange}</td>
                <td>
                  {Array.isArray(game.gameType)
                    ? gameTypeCap(game.gameType).join(", ")
                    : game.gameType}
                </td>
                <td>{game._id}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default GetGameLibrary;
