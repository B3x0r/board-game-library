import React from 'react';
import { UserContext } from './context';

function NavBar() {
  const [navTab, setTab] = React.useState("home");

  React.useEffect(() => {
    if (window.location.hash.indexOf("addGame") > -1) {
      setTab("addGame/")
    } else if(window.location.hash.indexOf("gameLibrary") > -1) {
      setTab("gameLibrary/")
    } else {
      setTab("home")
    }
  });

  function activePage(page) {
    if (navTab === page) {
      return "active";
    } else {
      return "";
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light info" style={{padding: "20px"}}>
        <a
          className={"navbar-brand " + activePage("home")}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Home Page"
          href="#"
          onClick={() => setTab("home")}
        >
          Board Game Library
        </a>
        <button
          className="navbar-toggler"
          onClick={() => setTab("home")}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <>
            <li className="nav-item">
              <a
                className={"nav-link " + activePage("deposit/")}
                onClick={() => setTab("addGame/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add Games Here"
                href="#/addGame/"
              >
                Add Games<span className="tooltiptext"></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + activePage("withdraw/")}
                onClick={() => setTab("gameLibrary/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Check Out All Your Games"
                href="#/gameLibrary/"
              >
                Your Game Library<span className="tooltiptext"></span>
              </a>
            </li>        
            </>
          </ul>
        </div>
            {
              <>
                <span className="navbar-text">
                  Welcome Gamer!
                </span>
              </>
            }
      </nav>
    </>
  );
}

export default NavBar;
