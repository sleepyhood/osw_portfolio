import React, { useRef } from "react";
import homeImg from "../imgs/home2.jpg";

const Home = () => {
  const section1Ref = useRef(null);
  const innerHeight = window.innerHeight;
  const scrollTo = (ref) => {
    window.scroll({
      top: innerHeight,
      behavior: "smooth",
    });
  };
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

      <div class="scrolldown-wrapper" onClick={() => scrollTo(section1Ref)}>
        <div class="scrolldown">
          <svg height="30" width="10">
            <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
            <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
          </svg>
        </div>
      </div>
      <div className="otherLinks">
        <a
          href="https://github.com/sleepyhood"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-github fa-3x"></i>
        </a>
      </div>

      {/* <div ref={section1Ref}>
        <Profile />
      </div> */}
    </div>
  );
};

export default Home;
