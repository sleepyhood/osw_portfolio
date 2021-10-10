import React, { useState, useEffect } from "react";
import c from "../imgs/icons/c.svg";
import cplusplus from "../imgs/icons/cplusplus.svg";
import css from "../imgs/icons/css3.svg";
import html from "../imgs/icons/html-5.svg";
import js from "../imgs/icons/javascript.svg";
import nodeJs from "../imgs/icons/node-js.svg";
import php from "../imgs/icons/php.svg";
import python from "../imgs/icons/python.svg";
import react from "../imgs/icons/react.svg";
import mysql from "../imgs/icons/mysql.svg";
import firebase from "../imgs/icons/firebase.svg";
import r from "../imgs/icons/r.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const iconWH = "70px";
  const iconStyle = {
    borderRadius: "0",
    width: iconWH,
    height: iconWH,
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "5px 5px",
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      placement: "top-bottom",
    });
  });

  return (
    <div className="skills">
      <div className="container skills" style={{ backgroundColor: "#f8f8f8" }}>
        <div
          className="form skills"
          style={{
            color: "#171717",
            fontSize: "60px",
          }}
        >
          <div className="inForm">
            <div style={{ fontSize: "60px" }}>Skills</div>
            <div className="introduce skills">
              <ul className="skillSection">
                <li data-aos="fade-left">
                  <span>Front End</span>
                  <div className="icons">
                    <div style={{ display: "block", textAlign: "center" }}>
                      <img src={html} style={iconStyle} />
                      <p style={{ display: "none" }}>html5</p>
                    </div>
                    <img src={css} style={iconStyle} />
                    <img src={js} style={iconStyle} />
                    <img src={react} style={iconStyle} />
                  </div>
                </li>
                <li data-aos="fade-right">
                  <span>Back End</span>
                  <div className="icons">
                    <img src={nodeJs} style={iconStyle} />
                    <img src={php} style={iconStyle} />
                  </div>
                </li>
                <li data-aos="fade-left">
                  <span>Algorithm</span>
                  <div className="icons">
                    <img src={c} style={iconStyle} />
                    <img src={cplusplus} style={iconStyle} />
                    <img src={python} style={iconStyle} />
                    <img src={r} style={iconStyle} />
                  </div>
                </li>
                <li data-aos="fade-right">
                  <span>DataBase</span>
                  <div className="icons">
                    <img src={mysql} style={iconStyle} />
                    <img src={firebase} style={iconStyle} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
