import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import addGame from './addGame';
//import gameLibrary from './gameLibrary';
import Logout from './logout';
import NavBar from './navbar';
import { UserProvider } from './context';

function App() {
  return (
    <HashRouter>
      <UserProvider>
      <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/addGame/" element={<addGame />} />
            <Route path="/gameLibrary/" element={<gameLibrary />} />
            <Route path="/logout/" element={<Logout />} />
          </Routes>
        </div>
      </UserProvider>      
    </HashRouter>
  );
}

export default App;
