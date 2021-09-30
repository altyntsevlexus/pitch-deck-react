import React from "react";
import Logo from "../components/Logo";

import users from "../images/users.svg";
import chart from "../images/chart.svg";
import code from "../images/code.svg";

import usersPrimary from "../images/users-c-primary.svg";
import chartPrimary from "../images/chart-c-primary.svg";
import codePrimary from "../images/code-c-primary.svg";

const Difference = ({ type, linkTo }) => {
  const setSectionClass = (type) => {
    return type === "bg"
      ? "difference--bg--image text-light"
      : type === "primary"
      ? "difference--bg--primary text-light"
      : "text-dark";
  };

  return (
    <section className={`wrapper difference ${setSectionClass(type)}`}>
      <Logo color={type && "light"} linkTo={linkTo} />

      <h1 className="fs-72 difference__title">What makes us different?</h1>
      <ul className="difference-list">
        <li className="difference-list__item">
          <img src={type ? users : usersPrimary} alt="users" className="difference-list__icon" />
          <h2 className="difference-list__title fs-48">Proven team</h2>
          <p className="fs-34">Founding team with multiple exits.</p>
        </li>
        <li className="difference-list__item">
          <img src={type ? chart : chartPrimary} alt="chart" className="difference-list__icon" />
          <h2 className="difference-list__title fs-48">Market traction</h2>
          <p className="fs-34">Profitable, growing userbase.</p>
        </li>
        <li className="difference-list__item">
          <img src={type ? code : codePrimary} alt="code" className="difference-list__icon" />
          <h2 className="difference-list__title fs-48">Unique tech</h2>
          <p className="fs-34">Innovative technology.</p>
        </li>
      </ul>
    </section>
  );
};

export default Difference;
