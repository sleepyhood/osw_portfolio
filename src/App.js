import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";

import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about-me">
              <Profile />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
      <footer>&copy; {new Date().getFullYear()} made by OSW</footer>
    </>
  );
}

export default App;
