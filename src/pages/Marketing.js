import React from "react";
import Logo from "../components/Logo";

import cornerImgL from "../images/cornerImgL.png";
import star from "../images/star.svg";

import "../styles/marketing.scss";

const Marketing = () => {
  return (
    <section className="wrapper split-screen text-dark">
      <aside className="split-screen__aside split-screen__aside--m--d-none"></aside>
      <main className="split-screen__main">
        <Logo linkTo="differenceLight" />
        <h1 className="fs-72 info-title">Marketing Strategy</h1>
        <ul className="marketing">
          <li className="marketing__item">
            <div className="circle">
              <img src={star} alt="star" className="circle__icon" />
            </div>
            <div>
              <h2 className="fs-48 marketing__title">Advertising</h2>
              <p className="fs-48">React COOs quickly</p>
            </div>
          </li>
          <li className="marketing__item">
            <div className="circle">
              <img src={star} alt="star" className="circle__icon" />
            </div>
            <div>
              <h2 className="fs-48 marketing__title">Organic search</h2>
              <p className="fs-48">With a focus on long-tail keywords</p>
            </div>
          </li>
          <li className="marketing__item">
            <div className="circle">
              <img src={star} alt="star" className="circle__icon" />
            </div>
            <div>
              <h2 className="fs-48 marketing__title">Content marketing</h2>
              <p className="fs-48">Providing useful, niche content</p>
            </div>
          </li>
        </ul>
      </main>
      <img src={cornerImgL} alt="corner" className="corner-img corner-img--pos--l" />
    </section>
  );
};

export default Marketing;
