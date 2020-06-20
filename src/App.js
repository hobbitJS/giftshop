import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";

import Home from "./pages/home/home.component";
import Category from "./pages/category/category.component";
import Checkout from "./pages/checkout/checkout.component";
import SearchPage from "./pages/search-page/search-page.component";

import "./App.css";
import { ContentContainer } from "./App.styles";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentContainer>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop/:categoryName" component={Category} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/search/:query" component={SearchPage} />
          </Switch>
        </ContentContainer>
      </div>
    );
  }
}

export default App;
