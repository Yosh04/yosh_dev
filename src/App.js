import React from 'react';
import "./App.css";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Navbar } from "./components/Navbar";
import Skills from './components/Skills';
import Proyects from './components/Proyects';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home/>
        <Proyects/>
        <Skills/>
        <Services/>
        <Contact/>
      </div>
  );
}

export default App;
