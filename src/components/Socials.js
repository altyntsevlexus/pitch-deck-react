import React from "react";

import linkImg from "../images/link.svg";
import facebookImg from "../images/facebook.svg";
import twitterImg from "../images/twitter.svg";

const Socials = ({ website, facebook, twitter }) => {
  return (
    <ul className="socials fs-48">
      <li className="socials__item">
        <div className="circle">
          <img src={linkImg} alt="link" className="circle__icon" />
        </div>
        <a href="/cover">{website}</a>
      </li>
      <li className="socials__item">
        <div className="circle">
          <img src={facebookImg} alt="facebook" className="circle__icon" />
        </div>
        <a href="/cover">{facebook}</a>
      </li>
      <li className="socials__item">
        <div className="circle">
          <img src={twitterImg} alt="twitter" className="circle__icon" />
        </div>
        <a href="/cover">{twitter}</a>
      </li>
    </ul>
  );
};

export default Socials;
