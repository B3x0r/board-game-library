import React from "react";
import { UserContext, Card } from "./context";

function addGame() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [game, setGame] = React.useState("");
  const [ageRange, setAgeRange] = React.useState("");
  const [numberPlayers, setNumberPlayers] = React.useState("");
  const [type, setType] = React.useState("");
  const [timeRange, setTimeRange] = React.useState("");
  const [gameType, setGameType] = React.useState([]);
}

return (
  <Card
  bgcolor="primary"
  header="Add Game"
  status={status}
  body={
    show ? (
      <>
      <form>
        <br />
          Game Name
        <br />
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter game name"
          value={name}
          onChange={(e) => setGame(e.currentTarget.value)}
        />
        <br />
        Age Range
        <br />
        <input
          type="text"
          className="form-control"
          id="ageRange"
          placeholder="Enter age range"
          value={ageRange}
          onChange={(e) => setAgeRange(e.currentTarget.value)}
        />
        <br />
        Number of Players
        <br />
        <input
          type="number"
          className="form-control"
          id="numberPlayers"
          placeholder="Enter number of players"
          value={numberPlayers}
          onChange={(e) => setNumberPlayers(e.currentTarget.value)}
        />
        <br />
        Play Time Range
        <br />
        <input
          type="text"
          className="form-control"
          id="timeRange"
          placeholder="Enter estimated play time in minutes"
          value={ageRange}
          onChange={(e) => setTimeRange(e.currentTarget.value)}
        />
        <br />
        <select className="custom-select" multiple
        id="gameType"
        placeholder="Choose game type, select all that apply"
        value={gameType}
        onChange={(e) => setGameType(e.currentTarget.value)}
        >
          <option selected>Open this select menu</option>
          <option value="1">Chance</option>
          <option value="2">Collaborative</option>
          <option value="3">Mystery</option>
          <option value="4">Party</option>
          <option value="5">Strategy</option>
          <option value="6">Trivia</option>
          <option value="7">Word Games</option>
          <option value="8">Bluffing</option>
          <option value="9">Card Game</option>
          <option value="10">City or Civilization Building</option>
          <option value="11">Collectable</option>
          <option value="12">Deduction</option>
          <option value="13">Dungeon Crawler</option>
          <option value="14">Dexterity</option>
          <option value="15">Dice</option>
          <option value="16">Economic</option>
          <option value="17">Educational</option>
          <option value="18">Engine Building</option>
          <option value="19">Exploration</option>
          <option value="20">Farming</option>
          <option value="21">Fighting</option>
          <option value="22">Gamebooks</option>
          <option value="23">Humourous</option>
          <option value="24">Legacy</option>
          <option value="25">Math Based</option>
          <option value="26">Mature/Adult</option>
          <option value="27">Maze</option>
          <option value="28">Memory</option>
          <option value="29">Miniature Games</option>
          <option value="30">Murder Mystery</option>
          <option value="31">Negotiation</option>
          <option value="32">One Vs. Many</option>
          <option value="33">Puzzle Games</option>
          <option value="34">Racing</option>
          <option value="35">Real-time</option>
          <option value="36">Role-Playing</option>
          <option value="37">Sandbox</option>
          <option value="38">Territory Building</option>
          <option value="39">Time Period, Historic or Future</option>
        </select>
        <option value="40">Travel</option>
        <option value="41">War Games</option>

    )
  }
)
