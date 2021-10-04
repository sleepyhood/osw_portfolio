import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "react-responsive";

const Navigation = () => {
  const [scrollDirection, setScrollDirection] = useState();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );

  const isPc = useMediaQuery({
    query: "(min-width:700px)",
  });

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const listener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect());

    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const onHandleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onMobile = () => {};

  return scrollDirection === "down" || window.scrollY < 40 ? (
    <nav className="navBar active">
      <div className="myLogo" onclick={onHandleTop}>
        <i class="fab fa-react"></i>
        <span>OSW</span>
      </div>
      <ul className="navMenu PC">
        <li>
          <Link to="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link to="/about-me">
            <div>About Me</div>
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <div>Portfolio</div>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <div>Contact</div>
          </Link>
        </li>
      </ul>
      <a href="#" className="toggleBtn" onClick={onMobile}>
        <i class="fas fa-bars"></i>
      </a>
    </nav>
  ) : (
    <nav className="navBar hidden"></nav>
  );
};

export default Navigation;
