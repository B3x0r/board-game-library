import Card from 'react-bootstrap/Card';
import React from 'react';

function Home(){
  return (
    <Card>
      bgcolor="success"
      txtcolor="white"
      header="Board Game Library"
      title="Step Right up and Pick the Right Game"
      text="a new way to check out your own games"
      body={(<img src="games.jpg" className="img-fluid" alt="Image of a shelf full of board games"/>)}
    </Card>
  );
}

export default Home ;
