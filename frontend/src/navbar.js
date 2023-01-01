import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const [active, setActive] = React.useState("home");

  return (
    <Navbar>
      <Container>
      <Nav
          className="justify-content-start"
          activeKey={active}
          onSelect={(selectedKey) => setActive(selectedKey)}
        >
          <Navbar.Brand
            href="/"
          >
            Board Game Library
          </Navbar.Brand>
          <Nav.Link
            href="/addGame"
            eventKey="AddGame"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Add Games Here"
          >
            Add Game
          </Nav.Link>
          <Nav.Link
            href="/gameLibrary"
            eventKey="GetGameLibrary"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Check Out All Your Games"
          >
            Game Library
          </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text className="justify-content-end">
              Welcome Gamer!
            </Navbar.Text>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
