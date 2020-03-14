import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
