import propTypes from 'prop-types';

import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo.svg';
import logoLight from '../../images/icons/logo-light.svg';

import styled from './Logo.module.scss';

const Logo = ({ color }) => {
  return (
    <Link to="/">
      <img
        src={color === 'light' ? logoLight : logo}
        alt="logo"
        className={styled.logo}
      />
    </Link>
  );
};

Logo.propTypes = {
  color: propTypes.string,
};

Logo.defaultProps = {
  color: 'dark',
};

export default Logo;
