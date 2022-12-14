import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import NavBar from "./navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { GameProvider } from "./context";

import Home from "./home";
import AddGamePage from "./addGame";
import GetGameLibrary from "./gameLibrary";

class App extends React.Component{
  render(){
    return(
        <div className="App">
          <BrowserRouter>
            <GameProvider>
              <NavBar />
              <Routes>
                <Route exact path='/' element={< Home />} />
                <Route exact path='/addGame' element={< AddGamePage />} />
                <Route exact path='/gameLibrary' element={< GetGameLibrary />} />
              </Routes>
            </GameProvider>
          </BrowserRouter>
        </div>
    )
  }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
