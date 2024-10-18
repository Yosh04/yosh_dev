import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Navbar } from "./components/Navbar";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import GitHubProjects from "./components/GitPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-cente">
      <Navbar />
      <Home />
      <Proyects />
      <Skills/>
          <Services/>
          <Contact/> 
    </div>
  );
}

export default App;
