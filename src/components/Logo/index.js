import React from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
// import logo from "../../assets/tix-logo.png";
import { animateScroll } from "react-scroll";
const Logo = (props) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <img
      src={'../logo.png'}
      alt="Logo"
      width={200}
      onClick={() => {
        if (location.pathname !== "/") {
          history.push("/");
        }
        animateScroll.scrollToTop();
      }}
    />
  );
};

export default Logo;
