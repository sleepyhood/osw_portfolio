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

const Skills = () => {
  const iconWH = "70px";
  const iconStyle = {
    borderRadius: "0",
    width: iconWH,
    height: iconWH,
    backgroundColor: "transparent",
    boxShadow: "none",
  };
  return (
    <div className="skills">
      <div className="container skills" style={{ backgroundColor: "#f8f8f8" }}>
        <div
          className="form skills"
          style={{ color: "#171717", fontSize: "70px" }}
        >
          <div className="inForm">
            <div style={{ fontSize: "60px" }}>Skills</div>
            <div className="introduce skills">
              <ul>
                <li>
                  <div>
                    Front End
                    <img src={html} style={iconStyle} />
                    <img src={css} style={iconStyle} />
                    <img src={js} style={iconStyle} />
                    <img src={react} style={iconStyle} />
                    <img src={php} style={iconStyle} />
                    <img src={nodeJs} style={iconStyle} />
                    <img src={c} style={iconStyle} />
                    <img src={cplusplus} style={iconStyle} />
                    <img src={python} style={iconStyle} />
                  </div>
                </li>
                <li>Back End</li>
                <li>Algorithm</li>
                <li>DataBase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
