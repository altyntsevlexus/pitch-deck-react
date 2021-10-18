import Circle from '../components/Circle';
import Logo from '../components/Logo';

import cornerImgL from '../images/corner-img-l.png';
import star from '../images/icons/star.svg';

const Marketing = () => {
  return (
    <section className="wrapper split-screen text-dark">
      <aside className="split-screen__aside split-screen__aside--m--d-none" />
      <main className="split-screen__main">
        <Logo />
        <h1 className="info-title">Marketing Strategy</h1>
        <ul className="marketing">
          <li className="marketing__item">
            <Circle icon={star} />
            <div>
              <p className="marketing__title">Advertising</p>
              <p>React COOs quickly</p>
            </div>
          </li>
          <li className="marketing__item">
            <Circle icon={star} />
            <div>
              <p className="marketing__title">Organic search</p>
              <p>With a focus on long-tail keywords</p>
            </div>
          </li>
          <li className="marketing__item">
            <Circle icon={star} />
            <div>
              <p className="marketing__title">Content marketing</p>
              <p>Providing useful, niche content</p>
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
