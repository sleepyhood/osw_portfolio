import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
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
          {/* 
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
          </Switch> */}
        </Router>
      </div>
    </>
  );
}

export default App;
// https://medium.com/@sidbentifraouine/responsive-animated-top-navigation-bar-with-react-transition-group-fd0ccbfb4bbb
// 참고
