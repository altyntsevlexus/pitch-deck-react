import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <section className="wrapper navigation text-dark">
      <ul className="navigation__list fs-34">
        <li>
          <Link to="/blocks-table">Blocks Table</Link>
        </li>
        <li>
          <Link to="/cover">Cover</Link>
        </li>
        <li>
          <Link to="/cover-alt">Cover alt</Link>
        </li>
        <li>
          <Link to="/cover-primary">Cover primary</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/mission">Mission</Link>
        </li>
        <li>
          <Link to="/bg">Bg</Link>
        </li>
        <li>
          <Link to="/target">Target</Link>
        </li>
        <li>
          <Link to="/competition">Competition</Link>
        </li>
        <li>
          <Link to="/marketing">Marketing</Link>
        </li>
        <li>
          <Link to="/difference">Difference</Link>
        </li>
        <li>
          <Link to="/difference-primary">Difference primary</Link>
        </li>
        <li>
          <Link to="/difference-bg">Difference bg</Link>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
