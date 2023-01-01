import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="./games.jpg" className="img-fluid" alt="Image of a shelf full of board games" />
      <Card.Body>
        <Card.Title>Board Game Library</Card.Title>
        <Card.Text>
          A new way to check out your own games.
        </Card.Text>
        <Button href="/#gameLibrary/"
          variant="primary">
          Pick the Right Game
          </Button>
      </Card.Body>
    </Card>
  );
}

export default Home ;
