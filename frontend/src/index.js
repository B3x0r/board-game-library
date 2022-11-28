import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import NavBar from './navbar';
import Home from './home';
import AddGame from './addGame';
import gameLibrary from './gameLibrary';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GameProvider } from './context';

function App() {
  return (
    <HashRouter>
      <GameProvider>
      <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addGame/" element={<AddGame />} />
            <Route path="/gameLibrary/" element={<gameLibrary />} />
          </Routes>
        </div>
      </GameProvider>      
    </HashRouter>
  );
}

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
