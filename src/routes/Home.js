import React, { useState, useEffect } from "react";
import homeImg from "../imgs/home.jpg";
const Home = () => {
  return (
    <div className="home">
      <img src={homeImg} className="homeImgClass" />
      this is home
    </div>
  );
};

export default Home;
