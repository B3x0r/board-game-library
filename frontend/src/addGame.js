import React from 'react';
import GameContext from "./context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';

function AddGame() {
  const [show, setShow] = React.useState(true);
  const [game, setGame] = React.useState("");
  const [ageRange, setAgeRange] = React.useState("");
  const [numberPlayers, setNumberPlayers] = React.useState("");
  const [timeRange, setTimeRange] = React.useState("");
  const [gameType, setGameType] = React.useState("[]");

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
    setShow(false);
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
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Add Game</Card.Title>
        <Form>
          <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Game Name</Form.Label>
              <Form.Control type="text" placeholder="Enter game name" />
              <Form.Text className="text-muted">
                including edition, if unique
              </Form.Text>
                onChange={(e) => setGame(e.currentTarget.value)}
            </Form.Group>
          <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Age Range</Form.Label>
              <Form.Control type="text" placeholder="Enter age range" />
              <Form.Text className="text-muted">
                in years, example "9-99"
              </Form.Text>
                onChange={(e) => setAgeRange(e.currentTarget.value)}/
            </Form.Group>
           <br />
             <Form.Group className="mb-3" controlId="formBasicTextImput">
                <Form.Text>Number of Players</Form.Text>
                <Form.Control type="number"
                  placeholder="Enter number of players"
                  onChange={(e) => setNumberPlayers(e.currentTarget.value)}/>
              </Form.Group>
            <br />
              <Form.Group className="mb-3" controlId="formBasicTextImput">
                <Form.Text>Play Time Range</Form.Text>
                <Form.Control type="number"
                  placeholder="Enter estimated play time in minutes" 
                  onChange={(e) => setTimeRange(e.currentTarget.value)}/>
              </Form.Group>
            <br />
              <Form.Group>
                <InputGroup className="mb-3">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                    align="end"
                >
                  <Dropdown.Item href="chance">Chance</Dropdown.Item>
                  <Dropdown.Item href="collaborative">Collaborative</Dropdown.Item>
                  <Dropdown.Item href="mystery">Mystery</Dropdown.Item>
                  <Dropdown.Item href="party">Party</Dropdown.Item>
                  <Dropdown.Item href="strategy">Strategy</Dropdown.Item>
                  <Dropdown.Item href="trivia">Trivia</Dropdown.Item>
                  <Dropdown.Item href="wordGames">Word Games</Dropdown.Item>
                  <Dropdown.Item href="bluffing">Bluffing</Dropdown.Item>
                  <Dropdown.Item href="cardGame">Card Game</Dropdown.Item>
                  <Dropdown.Item href="ityOrCivilizationBuilding">City or Civilization Building</Dropdown.Item>
                  <Dropdown.Item href="collectable">Collectable</Dropdown.Item>
                  <Dropdown.Item href="deduction">Deduction</Dropdown.Item>
                  <Dropdown.Item href="dungeonCrawler">Dungeon Crawler</Dropdown.Item>
                  <Dropdown.Item href="dexterity">Dexterity</Dropdown.Item>
                  <Dropdown.Item href="dice">Dice</Dropdown.Item>
                  <Dropdown.Item href="economic">Economic</Dropdown.Item>
                  <Dropdown.Item href="educational">Educational</Dropdown.Item>
                  <Dropdown.Item href="engineBuilding">Engine Building</Dropdown.Item>
                  <Dropdown.Item href="exploration">Exploration</Dropdown.Item>
                  <Dropdown.Item href="farming">Farming</Dropdown.Item>
                  <Dropdown.Item href="fighting">Fighting</Dropdown.Item>
                  <Dropdown.Item href="gamebooks">Gamebooks</Dropdown.Item>
                  <Dropdown.Item href="humourous">Humourous</Dropdown.Item>
                  <Dropdown.Item href="legacy">Legacy</Dropdown.Item>
                  <Dropdown.Item href="mathBased">Math Based</Dropdown.Item>
                  <Dropdown.Item href="matureAdult">Mature/Adult</Dropdown.Item>
                  <Dropdown.Item href="maze">Maze</Dropdown.Item>
                  <Dropdown.Item href="memory">Memory</Dropdown.Item>
                  <Dropdown.Item href="miniatureGames">Miniature Games</Dropdown.Item>
                  <Dropdown.Item href="murderMystery">Murder Mystery</Dropdown.Item>
                  <Dropdown.Item href="negotiation">Negotiation</Dropdown.Item>
                  <Dropdown.Item href="oneVs.Many">One Vs. Many</Dropdown.Item>
                  <Dropdown.Item href="puzzleGames">Puzzle Games</Dropdown.Item>
                  <Dropdown.Item href="racing">Racing</Dropdown.Item>
                  <Dropdown.Item href="realTime">Real-Time</Dropdown.Item>
                  <Dropdown.Item href="rolePlaying">Role-Playing</Dropdown.Item>
                  <Dropdown.Item href="sandbox">Sandbox</Dropdown.Item>
                  <Dropdown.Item href="territorybuilding">Territory Building</Dropdown.Item>
                  <Dropdown.Item href="timePeriod">Time Period, Historic or Future</Dropdown.Item>
                  <Dropdown.Item href="travel">Travel</Dropdown.Item>
                  <Dropdown.Item href="warGame">War Games</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <br />
            <Button variant="primary">Add Game</Button>
              <Button variant="btn btn-light"
                type="submit">Add Game</Button>
                onClick={handleAddGame}
            </Form.Group>
          </Form>
    </Card.Body>
    </Card>
        ) : (
          <>
          <Card>
            <Card.Body>
             <Card.Title>Success</Card.Title>
              <Button variant="btn btn-light">Add another game</Button>
                onClick={clearForm}
            </Card.Body>
          </Card>
          </>
        )
    }


export default AddGame;
