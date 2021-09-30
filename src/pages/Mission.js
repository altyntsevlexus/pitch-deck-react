import React from "react";
import Logo from "../components/Logo";

const Mission = () => {
  return (
    <section className="wrapper split-screen mission text-dark">
      <aside className="split-screen__aside mission__aside"></aside>
      <main className="split-screen__main">
        <Logo linkTo="bg" />
        <h1 className="fs-72 info-title">Our mission</h1>
        <ul className="info-list">
          <li className="info-list__item mission__item">
            <h2 className="fs-48 info-list__title">Become the #1 Platform</h2>
            <p className="fs-34">There is an opportunity to become the go-to platform for product managers.</p>
          </li>
          <li className="info-list__item mission__item">
            <h2 className="fs-48 info-list__title">Create a Great Community</h2>
            <p className="fs-34">
              We want to help others by creating a community where people can get answers to questions.
            </p>
          </li>
          <li className="info-list__item mission__item">
            <h2 className="fs-48 info-list__title">Lead by Example</h2>
            <p className="fs-34">Our goal is to become the industry leader by fostering great relationships.</p>
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Mission;
