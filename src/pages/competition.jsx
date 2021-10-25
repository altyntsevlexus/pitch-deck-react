import Logo from '../components/Logo';

import cornerImgR from '../images/corner-img-r.png';

const Competition = () => {
  return (
    <section className="wrapper split-screen">
      <main className="split-screen__main">
        <Logo />
        <div>
          <h1 className="info-title">The Competition</h1>
          <ul className="info-list">
            <li className="info-list__item">
              <h2 className="info-list__title">Company 1</h2>
              <p className="info-list__description">
                Their reviews average 3.5, whereas we average 5 stars
              </p>
            </li>
            <li className="info-list__item">
              <h2 className="info-list__title">Company 2</h2>
              <p className="info-list__description">
                Their reviews average 3.5, whereas we average 5 stars
              </p>
            </li>
            <li className="info-list__item">
              <h2 className="info-list__title">Company 3</h2>
              <p className="info-list__description">
                Their reviews average 3.5, whereas we average 5 stars
              </p>
            </li>
            <li className="info-list__item">
              <h2 className="info-list__title">Company 4</h2>
              <p className="info-list__description">
                Their reviews average 3.5, whereas we average 5 stars
              </p>
            </li>
          </ul>
        </div>
      </main>
      <aside className="split-screen__aside split-screen__aside--m--d-none" />
      <img
        src={cornerImgR}
        alt="corner"
        className="corner-img corner-img--pos--r"
      />
    </section>
  );
};

export default Competition;
