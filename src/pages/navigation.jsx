import { Link } from 'react-router-dom';

const Navigation = () => (
  <section className="wrapper navigation text-dark">
    <ul className="navigation__list fs-34">
      <li className="navigation__item">
        <Link to="/cover">Cover</Link>
      </li>
      <li className="navigation__item">
        <Link to="/cover-alt">Cover alt</Link>
      </li>
      <li className="navigation__item">
        <Link to="/cover-primary">Cover primary</Link>
      </li>
      <li className="navigation__item">
        <Link to="/team">Team</Link>
      </li>
      <li className="navigation__item">
        <Link to="/mission">Mission</Link>
      </li>
      <li className="navigation__item">
        <Link to="/bg">Bg</Link>
      </li>
      <li className="navigation__item">
        <Link to="/target">Target</Link>
      </li>
      <li className="navigation__item">
        <Link to="/competition">Competition</Link>
      </li>
      <li className="navigation__item">
        <Link to="/marketing">Marketing</Link>
      </li>
      <li className="navigation__item">
        <Link to="/difference">Difference</Link>
      </li>
      <li className="navigation__item">
        <Link to="/difference-primary">Difference primary</Link>
      </li>
      <li className="navigation__item">
        <Link to="/difference-bg">Difference bg</Link>
      </li>
    </ul>
  </section>
);

export default Navigation;
