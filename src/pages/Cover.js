import React from "react";
import Logo from "../components/Logo";
import Socials from "../components/Socials";

import iphone from "../images/iphone.png";

const Cover = ({ type }) => {
  const setAsideBackground = (type) => {
    return type === "primary" ? "cover__aside-primary" : type === "alt" ? "cover__aside-alt" : "cover__aside";
  };

  return (
    <section className="wrapper split-screen cover text-dark">
      <aside className={`split-screen__aside ${setAsideBackground(type)}`}>
        {type === "primary" && <img src={iphone} alt="iphone" className="cover__iphone" />}
      </aside>
      {type === "primary" ? (
        <main className="split-screen__main">
          <Logo linkTo="team" />
          <h1 className="fs-72 cover__title">Company Name</h1>
          <p className="cover__description fs-48">
            Intriguing summary goes here. Keep it short & sweet. Describe the problem you are solving. Focus on the pain
            point.
          </p>
          <Socials website="website.com" twitter="@handle" facebook="@compahyhandle" />
        </main>
      ) : type === "alt" ? (
        <main className="split-screen__main cover__main-alt">
          <Logo linkTo="coverPrimary" />
          <h1 className="fs-144 cover__title">Company Name</h1>
          <p className="fs-48">Give a short, strong elevator pitch here.</p>
        </main>
      ) : (
        <main className="split-screen__main">
          <Logo linkTo="coverAlt" />
          <h1 className="fs-72 cover__title">Company Name</h1>
          <p className="cover__description fs-48">
            Intriguing summary goes here. Keep it short & sweet. Describe the problem you are solving. Focus on the pain
            point.
          </p>
          <Socials website="www.website.com" twitter="@compahyhandle" facebook="@compahyhandle" />
        </main>
      )}
    </section>
  );
};

//this code could be more compact if in /cover and /coverPrimary we had the same socials and linkTo in the Logo. Moreover this is the way it should be (seems like typo in design). Due to this fact

export default Cover;
