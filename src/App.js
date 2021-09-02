import logo from "./logo.svg";
import "./App.css";
import CenteredCard from "./components/CenteredCard/";
import { useState } from "react";

function App() {
  const person = {
    name: "José",
    age: 17,
    country: "BR",
  };
  const person1 = {
    name: "Maria",
    age: 28,
    country: "ALE",
  };
  const person2 = {
    name: "Rosalia",
    age: 11,
    country: "FRA",
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <CenteredCard person={person} />
          <CenteredCard person={person1}></CenteredCard>
          <CenteredCard person={person2} />
        </div>
      </header>
    </div>
  );
}

export default App;
