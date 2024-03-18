import React from 'react';
import "./App.css";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Navbar } from "./components/Navbar";
import Skills from './components/Skills';
import Proyects from './components/Proyects';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home/>
        <Services/>
        <Skills/>
        <Proyects/>
      </div>
  );
}

export default App;
