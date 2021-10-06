import Circle from "./Circle";

import linkImg from "../images/icons/link.svg";
import facebookImg from "../images/icons/facebook.svg";
import twitterImg from "../images/icons/twitter.svg";
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
