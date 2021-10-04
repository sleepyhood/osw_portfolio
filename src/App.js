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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <footer>&copy; {new Date().getFullYear()} made by OSW</footer>
    </div>
  );
}

export default App;
