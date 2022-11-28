import React from 'react';
import { GameContext } from "./context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  apiAddGame,
  apiDeleteGame,
  apiUpdateGame,
  apiLibrary,
} from "./dal";

function GetGameLibrary() {
  const {
    createGameRecord,
    gameLibrary
  } = React.useContext(GameContext);

  React.useEffect(() => {
    gameLibrary()
  }, []);

  return  (
    <div className="container">
      <h3>Game Library</h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Game</th>
            <th scope="col">Age Range</th>
            <th scope="col">Number of Players</th>
            <th scope="col">Time Range</th>
            <th scope="col">Game Type</th>

          </tr>
        </thead>
        <tbody>
          {gameLibrary.map((game, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{game.game}</td>
              <td>{game.ageRange}</td>
              <td>{game.numberPlayers}</td>
              <td>{game.timeRange}</td>
              <td>{game.gameType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetGameLibrary;