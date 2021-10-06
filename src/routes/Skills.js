import React, { useState, useEffect } from "react";

const Skills = () => {
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
                  <div>Front End</div>
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
