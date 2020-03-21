import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";

import Home from "./pages/home/home.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
