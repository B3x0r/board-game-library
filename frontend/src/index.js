import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import NavBar from "./navbar";
import React, { Component, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { GameProvider } from "./context";

import Home from "./home";
import AddEdit from "./gameForm";
import GetGameLibrary from "./gameLibrary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <GameProvider>
            <NavBar />
            <Suspense fallback={<div className="preloader">Loading...</div>}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/addGame" element={<AddEdit />} />
                <Route exact path="/gameLibrary" element={<GetGameLibrary />} />
                <Route exact path="/editGame/:gameID" element={<AddEdit />} />
              </Routes>
            </Suspense>
          </GameProvider>
        </BrowserRouter>
      </div>
    );
  }
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
