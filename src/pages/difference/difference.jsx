import propTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';

import users from '../../images/icons/users.svg';
import chart from '../../images/icons/chart.svg';
import code from '../../images/icons/code.svg';

import usersPrimary from '../../images/icons/users-c-primary.svg';
import chartPrimary from '../../images/icons/chart-c-primary.svg';
import codePrimary from '../../images/icons/code-c-primary.svg';

import styled from './difference.module.scss';

const setSectionClass = (theme) => {
  switch (theme) {
    case 'bg':
      return styled['difference--bg--image'];
    case 'primary':
      return styled['difference--bg--primary'];
    default:
      return null;
  }
};

const Difference = ({ theme }) => {
  return (
    <section
      className={`wrapper ${styled.difference} ${setSectionClass(theme)}`}
    >
      <Logo color={theme && 'light'} />

      <h1 className={styled.difference__title}>What makes us different?</h1>
      <ul className={styled['difference-list']}>
        <li className={styled['difference-list__item']}>
          <img
            src={theme ? users : usersPrimary}
            alt="users"
            className={styled['difference-list__icon']}
          />
          <h2 className={styled['difference-list__title']}>Proven team</h2>
          <p className={styled['difference-list__description']}>
            Founding team with multiple exits.
          </p>
        </li>
        <li className={styled['difference-list__item']}>
          <img
            src={theme ? chart : chartPrimary}
            alt="chart"
            className={styled['difference-list__icon']}
          />
          <h2 className={styled['difference-list__title']}>Market traction</h2>
          <p className={styled['difference-list__description']}>
            Profitable, growing userbase.
          </p>
        </li>
        <li className={styled['difference-list__item']}>
          <img
            src={theme ? code : codePrimary}
            alt="code"
            className={styled['difference-list__icon']}
          />
          <h2 className={styled['difference-list__title']}>Unique tech</h2>
          <p className={styled['difference-list__description']}>
            Innovative technology.
          </p>
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
