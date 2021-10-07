import propTypes from 'prop-types';

import Logo from '../components/Logo';

import users from '../images/icons/users.svg';
import chart from '../images/icons/chart.svg';
import code from '../images/icons/code.svg';

import usersPrimary from '../images/icons/users-c-primary.svg';
import chartPrimary from '../images/icons/chart-c-primary.svg';
import codePrimary from '../images/icons/code-c-primary.svg';

const setSectionClass = (theme) => {
  switch (theme) {
    case 'bg':
      return 'difference--bg--image text-light';
    case 'primary':
      return 'difference--bg--primary text-light';
    default:
      return 'text-dark';
  }
};

const Difference = ({ theme }) => {
  return (
    <section className={`wrapper difference ${setSectionClass(theme)}`}>
      <Logo color={theme && 'light'} />

      <h1 className="fs-72 difference__title">What makes us different?</h1>
      <ul className="difference-list">
        <li className="difference-list__item">
          <img
            src={theme ? users : usersPrimary}
            alt="users"
            className="difference-list__icon"
          />
          <h2 className="difference-list__title fs-48">Proven team</h2>
          <p className="fs-34">Founding team with multiple exits.</p>
        </li>
        <li className="difference-list__item">
          <img
            src={theme ? chart : chartPrimary}
            alt="chart"
            className="difference-list__icon"
          />
          <h2 className="difference-list__title fs-48">Market traction</h2>
          <p className="fs-34">Profitable, growing userbase.</p>
        </li>
        <li className="difference-list__item">
          <img
            src={theme ? code : codePrimary}
            alt="code"
            className="difference-list__icon"
          />
          <h2 className="difference-list__title fs-48">Unique tech</h2>
          <p className="fs-34">Innovative technology.</p>
        </li>
      </ul>
    </section>
  );
};

Difference.propTypes = {
  theme: propTypes.string,
};

Difference.defaultProps = {
  theme: '',
};

export default Difference;
