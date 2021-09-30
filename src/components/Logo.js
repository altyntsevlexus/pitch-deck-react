import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import logoLight from "../images/logo-light.svg";

const Logo = ({ linkTo, color }) => {
  return (
    <Link to={`/${linkTo}`}>
      <img src={color === "light" ? logoLight : logo} alt="logo" className="logo" />
    </Link>
  );
};

export default Logo;
