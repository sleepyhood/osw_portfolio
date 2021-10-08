import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);
  const [isHover5, setIsHover5] = useState(false);
  const [isHover6, setIsHover6] = useState(false);

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
                id="first"
                onMouseEnter={() => setIsHover1(true)}
                onMouseLeave={() => setIsHover1(false)}
              >
                {isHover1 && (
                  <>
                    <div class="bg first">
                      <a href="/" target="_blank">
                        <i class="fab fa-github fa-3x"></i>
                      </a>
                      <a href="/" target="_blank">
                        <i class="fas fa-play-circle fa-3x"></i>
                      </a>
                    </div>
                  </>
                )}
                <span>레츠고 잉어킹</span>
              </li>
              <li
                id="second"
                onMouseEnter={() => setIsHover2(true)}
                onMouseLeave={() => setIsHover2(false)}
              >
                {isHover2 && (
                  <>
                    <div class="bg second">
                      <a
                        href="https://github.com/sleepyhood/VaniliaJS2021_Momentum"
                        target="_blank"
                      >
                        <i class="fab fa-github fa-3x"></i>
                      </a>
                      <a
                        href="https://sleepyhood.github.io/VaniliaJS2021_Momentum/"
                        target="_blank"
                      >
                        <i class="fas fa-play-circle fa-3x"></i>
                      </a>
                    </div>
                  </>
                )}
                <span>클론 모멘텀</span>
              </li>
              <li
                id="third"
                onMouseEnter={() => setIsHover3(true)}
                onMouseLeave={() => setIsHover3(false)}
              >
                {isHover3 && (
                  <>
                    <div class="bg second">
                      <a
                        href="https://github.com/sleepyhood/nwitter"
                        target="_blank"
                      >
                        <i class="fab fa-github fa-3x"></i>
                      </a>
                      <a
                        href="https://sleepyhood.github.io/nwitter/"
                        target="_blank"
                      >
                        <i class="fas fa-play-circle fa-3x"></i>
                      </a>
                    </div>
                  </>
                )}
                <span>Squid Game</span>
              </li>
              <li
                id="forth"
                onMouseEnter={() => setIsHover4(true)}
                onMouseLeave={() => setIsHover4(false)}
              >
                {isHover4 && (
                  <>
                    <div class="bg second">
                      <a
                        href="https://github.com/sleepyhood/movie_app_2021"
                        target="_blank"
                      >
                        <i class="fab fa-github fa-3x"></i>
                      </a>
                      <a
                        href="https://sleepyhood.github.io/movie_app_2021/"
                        target="_blank"
                      >
                        <i class="fas fa-play-circle fa-3x"></i>
                      </a>
                    </div>
                  </>
                )}
                <span>Movue App</span>
              </li>
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
