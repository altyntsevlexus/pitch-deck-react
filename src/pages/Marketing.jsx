import Circle from '../components/Circle';
import Logo from '../components/Logo';

import cornerImgL from '../images/corner-img-l.png';
import star from '../images/icons/star.svg';

const Marketing = () => {
  return (
    <section className="wrapper split-screen text-dark">
      <aside className="split-screen__aside split-screen__aside--m--d-none"></aside>
      <main className="split-screen__main">
        <Logo />
        <h1 className="fs-72 info-title">Marketing Strategy</h1>
        <ul className="marketing">
          <li className="marketing__item">
            <Circle icon={star} />
            <div>
              <h2 className="fs-48 marketing__title">Advertising</h2>
              <p className="fs-48">React COOs quickly</p>
            </div>
          </li>
          <li className="marketing__item">
            <Circle icon={star} />
            <div>
              <h2 className="fs-48 marketing__title">Organic search</h2>
              <p className="fs-48">With a focus on long-tail keywords</p>
            </div>
          </li>
          <li className="marketing__item">
            <Circle icon={star} />
            <div>
              <h2 className="fs-48 marketing__title">Content marketing</h2>
              <p className="fs-48">Providing useful, niche content</p>
            </div>
          </li>
        </ul>
      </main>
      <img
        src={cornerImgL}
        alt="corner"
        className="corner-img corner-img--pos--l"
      />
    </section>
  );
};

export default Marketing;
