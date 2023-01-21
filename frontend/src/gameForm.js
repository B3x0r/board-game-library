import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, Col, Container, Form } from "react-bootstrap";
import { GameContext } from "./context";
import { useParams } from "react-router-dom";

function AddEdit(props) {
  const [show, setShow] = React.useState(true);
  const [game, setGame] = React.useState("");
  const [ageRange, setAgeRange] = React.useState("");
  const [numberPlayers, setNumberPlayers] = React.useState("");
  const [timeRange, setTimeRange] = React.useState("");
  const [gameType, setGameType] = React.useState([]);
  const {gameID} = useParams();
  const [isAddMode, setIsAddMode] = React.useState(true);
  const { addGame, editGame } = React.useContext(GameContext);
  console.log(gameID);

  function isMode(gameID) {
    gameID == undefined ? setIsAddMode(true) : setIsAddMode(false);
  }

  useEffect(() => {
    isMode(gameID);
  }, []);

  function submitGame(input, gameID) {
    gameID == undefined ? handleAddGame(input) : handleEditGame(gameID, input);

  }

  function handleAddGame(input) {
    input.preventDefault();
    addGame({ game, ageRange, numberPlayers, timeRange, gameType });
    setShow(false);
  }

  function handleEditGame(input) {
    input.preventDefault();
    editGame({ game, ageRange, numberPlayers, timeRange, gameType, gameID });
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
    <Container>
      <Card style={{ width: "24rem" }}>
        <Card.Body>
          {isAddMode ? (
            <Card.Title>Add Game</Card.Title>
          ) : (
            <Card.Title>Edit Game</Card.Title>
          )}
          <Form onSubmit={submitGame}>
            <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Game Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter game name"
                value={game}
                onChange={(e) => setGame(e.target.value)}
              />
              <Form.Text className="text-muted">
                including edition, if unique
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Age Range</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age range"
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
              />
              <Form.Text className="text-muted">
                in years, example "9-99"
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Number of Players</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter number of players"
                value={numberPlayers}
                onChange={(e) => setNumberPlayers(e.target.value)}
              />
              <Form.Text className="text-muted">example "2-6"</Form.Text>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicTextImput">
              <Form.Label>Play Time Range</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter estimated play time in minutes"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group as={Col} controlId="game_play_field">
              <Form.Label>Game Play Type</Form.Label>
              <Form.Control
                as="select"
                multiple
                value={gameType}
                onChange={(e) =>
                  setGameType(
                    [].slice
                      .call(e.target.selectedOptions)
                      .map((item) => item.value)
                  )
                }
              >
                <option value="Chance">Chance</option>
                <option value="Collaborative">Collaborative</option>
                <option value="Mystery">Mystery</option>
                <option value="Party">Party</option>
                <option value="Strategy">Strategy</option>
                <option value="Trivia">Trivia</option>
                <option value="Word Games">Word Games</option>
                <option value="Bluffing">Bluffing</option>
                <option value="Card Game">Card Game</option>
                <option value="City or Civilization Building">
                  City or Civilization Building
                </option>
                <option value="Collectable">Collectable</option>
                <option value="Deduction">Deduction</option>
                <option value="Dungeon Crawler">Dungeon Crawler</option>
                <option value="Dexterity">Dexterity</option>
                <option value="Dice">Dice</option>
                <option value="Economic">Economic</option>
                <option value="Educational">Educational</option>
                <option value="EngineBuilding">Engine Building</option>
                <option value="Exploration">Exploration</option>
                <option value="Farming">Farming</option>
                <option value="Fighting">Fighting</option>
                <option value="Gamebooks">Gamebooks</option>
                <option value="Humourous">Humourous</option>
                <option value="Legacy">Legacy</option>
                <option value="Math Based">Math Based</option>
                <option value="Mature Adult">Mature/Adult</option>
                <option value="Maze">Maze</option>
                <option value="Memory">Memory</option>
                <option value="Miniature Games">Miniature Games</option>
                <option value="Murder Mystery">Murder Mystery</option>
                <option value="Negotiation">Negotiation</option>
                <option value="One Vs. Many">One Vs. Many</option>
                <option value="Puzzle Games">Puzzle Games</option>
                <option value="Racing">Racing</option>
                <option value="Real Time">Real-Time</option>
                <option value="Role Playing">Role-Playing</option>
                <option value="Sandbox">Sandbox</option>
                <option value="Territory Building">Territory Building</option>
                <option value="Time Period">
                  Time Period, Historic or Future
                </option>
                <option value="Travel">Travel</option>
                <option value="War Game">War Games</option>
              </Form.Control>
              <br />
              {isAddMode ? (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={createGameRecord}
                >
                  Add Game
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={createGameRecord}
                >
                  Edit Game
                </Button>
              )}
              ;
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
            {isAddMode ? (
              <Button variant="btn btn-light" onClick={clearForm}>
                Add another game
              </Button>
            ) : (
              <Button variant="btn btn-light" onClick={clearForm}>
                Edit another game
              </Button>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default AddEdit;
