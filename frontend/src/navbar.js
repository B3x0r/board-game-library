import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const [active, setActive] = React.useState("home");

  return (
    <>
    <Navbar>
      <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav
        className="justify-content-center"
        activeKey={active}
        onSelect={(selectedKey) => setActive(selectedKey)}
      >
        <Container>
          <Nav.Item>
            <Nav.Link eventKey={"home"}
              data-toggle="tooltip"
              data-placement="bottom">
                Board Game Library Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={"AddGame"}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Add Games Here">
                Add Game
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={"gameLibrary"}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Check Out All Your Games">
                Game Library
            </Nav.Link>
          </Nav.Item>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Welcome Gamer!
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
