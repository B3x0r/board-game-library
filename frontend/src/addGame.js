import React from "react";
import { addGame } from "./context";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import { Card, Col, Container, Form } from "react-bootstrap";
import GamePlayType from "./GamePlayType";
import { PlayTypes } from "./PlayTypes";

function AddGamePage() {
  const [show, setShow] = React.useState(true);
  const [game, setGame] = React.useState("");
  const [ageRange, setAgeRange] = React.useState("");
  const [numberPlayers, setNumberPlayers] = React.useState("");
  const [timeRange, setTimeRange] = React.useState("");
  const [gameType, setGameType] = React.useState("[]");
  const [gameID, setGameID] = React.useState("");

  function handleAddGame() {
    createGameRecord(game, ageRange, numberPlayers, timeRange, gameType);
    setShow(false);
  }

  function createGameRecord() {
    setGame(game);
    setAgeRange(ageRange);
    setNumberPlayers(numberPlayers);
    setTimeRange(timeRange);
    setGameType("[]");
    setGameID(gameID);
    setShow(false);
    addGame({
      game,
      ageRange,
      numberPlayers,
      timeRange,
      gameType,
      gameID
    })
  }

  function clearForm() {
    setGame("");
    setAgeRange("");
    setNumberPlayers("");
    setTimeRange("");
    setGameType("[]");
    setShow(true);
  }

  return show ? (
    <Container>
      <Card style={{ width: "24rem" }}>
        <Card.Body>
          <Card.Title>Add Game</Card.Title>
          <Form onSubmit={handleAddGame}>
            <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Game Name</Form.Label>
              <Form.Control type="text" placeholder="Enter game name" />
              <Form.Text className="text-muted">
                including edition, if unique
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Age Range</Form.Label>
              <Form.Control type="text" placeholder="Enter age range" />
              <Form.Text className="text-muted">
                in years, example "9-99"
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Number of Players</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number of players"
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Play Time Range</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter estimated play time in minutes"
              />
            </Form.Group>
            <br />
            <Form.Group as={Col} controlId="game_play_field">
              <Form.Label>Game Play Type</Form.Label>
              <Form.Control
                as="select"
                multiple
                value={PlayTypes}
                onChange={(e) =>
                  GamePlayType(
                    [].slice
                      .call(e.target.selectedOptions)
                      .map((item) => item.value)
                  )
                }
              >
                <option value="chance">Chance</option>
                <option value="collaborative">Collaborative</option>
                <option value="mystery">Mystery</option>
                <option value="party">Party</option>
                <option value="strategy">Strategy</option>
                <option value="trivia">Trivia</option>
                <option value="wordGames">Word Games</option>
                <option value="bluffing">Bluffing</option>
                <option value="cardGame">Card Game</option>
                <option value="CityOrCivilizationBuilding">
                  City or Civilization Building
                </option>
                <option value="collectable">Collectable</option>
                <option value="deduction">Deduction</option>
                <option value="dungeonCrawler">Dungeon Crawler</option>
                <option value="dexterity">Dexterity</option>
                <option value="dice">Dice</option>
                <option value="economic">Economic</option>
                <option value="educational">Educational</option>
                <option value="engineBuilding">Engine Building</option>
                <option value="exploration">Exploration</option>
                <option value="farming">Farming</option>
                <option value="fighting">Fighting</option>
                <option value="gamebooks">Gamebooks</option>
                <option value="humourous">Humourous</option>
                <option value="legacy">Legacy</option>
                <option value="mathBased">Math Based</option>
                <option value="matureAdult">Mature/Adult</option>
                <option value="maze">Maze</option>
                <option value="memory">Memory</option>
                <option value="miniatureGames">Miniature Games</option>
                <option value="murderMystery">Murder Mystery</option>
                <option value="negotiation">Negotiation</option>
                <option value="oneVs.Many">One Vs. Many</option>
                <option value="puzzleGames">Puzzle Games</option>
                <option value="racing">Racing</option>
                <option value="realTime">Real-Time</option>
                <option value="rolePlaying">Role-Playing</option>
                <option value="sandbox">Sandbox</option>
                <option value="territorybuilding">Territory Building</option>
                <option value="timePeriod">
                  Time Period, Historic or Future
                </option>
                <option value="travel">Travel</option>
                <option value="warGame">War Games</option>
              </Form.Control>
              <br />
              <Button variant="primary" type="submit">
                Add Game
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  ) : (
    <>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Success</Card.Title>
            <Button variant="btn btn-light" onClick={clearForm}>
              Add another game
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default AddGamePage;
