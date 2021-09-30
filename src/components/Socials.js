import React from "react";
import Circle from "./Circle";

import linkImg from "../images/link.svg";
import facebookImg from "../images/facebook.svg";
import twitterImg from "../images/twitter.svg";
import { Link } from "react-router-dom";

const Socials = ({ website, facebook, twitter }) => {
  return (
    <ul className="socials fs-48">
      <li className="socials__item">
        <Circle icon={linkImg} />
        <Link to="/">{website}</Link>
      </li>
      <li className="socials__item">
        <Circle icon={facebookImg} />
        <Link to="/">{facebook}</Link>
      </li>
      <li className="socials__item">
        <Circle icon={twitterImg} />
        <Link to="/">{twitter}</Link>
      </li>
    </ul>
  );
};

export default Socials;
