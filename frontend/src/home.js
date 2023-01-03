import React from "react";
import { Button, Card, Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Card style={{ width: "24rem" }}>
        <Card.Img
          variant="top"
          src="./games.jpg"
          className="img-fluid"
          alt="Image of a shelf full of board games"
        />
        <Card.Body>
          <Card.Title>Board Game Library</Card.Title>
          <Card.Text>A new way to check out your own games.</Card.Text>
          <Button href="/#gameLibrary/" variant="primary">
            Pick the Right Game
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
