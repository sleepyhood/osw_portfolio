import React, { useState, useEffect } from "react";
import pokemon from "../imgs/잉어킹.png";
import momentum from "../imgs/momentum.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div
        className="container portfolio"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="form portfolio">
          <div style={{ fontSize: "60px", color: "#171717" }}>Portfolio</div>
          <div className="introduce portfolio">
            <ul style={{ color: "#171717" }}>
              <li
                style={{
                  backgroundImage: `url(${pokemon})`,
                  backgroundSize: "cover",
                }}
              >
                <span>레츠고 잉어킹</span>
              </li>
              <li
                style={{
                  backgroundImage: `url(${momentum}})`,
                  backgroundSize: "cover",
                }}
              >
                <span>클론 모멘텀</span>
              </li>
              <li
                style={{
                  backgroundImage: `url(${pokemon}})`,
                  backgroundSize: "cover",
                }}
              >
                3
              </li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
