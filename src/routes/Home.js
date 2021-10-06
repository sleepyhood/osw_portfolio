import React, { useState, useEffect } from "react";
import homeImg from "../imgs/home2.jpg";
const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${homeImg})`,
      }}
    >
      {/* <img src={homeImg} className="homeImgClass" /> */}
      <div className="container homeTitle">
        <span>Hello</span>
        <br></br>
        <span>I'm Front-End Developer.</span>
      </div>
      <div className="otherLinks">
        <a href="https://github.com/sleepyhood" target="_blank">
          <i class="fab fa-github fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
