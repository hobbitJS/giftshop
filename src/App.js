import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";

import Home from "./pages/home/home.component";
import Category from "./pages/category/category.component";
import Checkout from "./pages/checkout/checkout.component";
import SearchPage from "./pages/search-page/search-page.component";
import Login from "./pages/login/login.component";
import AdminPanel from "./pages/admin-panel/admin-panel.component";

import "./App.css";
import { ContentContainer } from "./App.styles";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContentContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop/:categoryName" component={Category} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/search/:query" component={SearchPage} />
          <Route path="/login" component={Login} />
          <Route path="/admin-panel" component={AdminPanel} />
        </Switch>
      </ContentContainer>
    </div>
  );
};

export default App;
