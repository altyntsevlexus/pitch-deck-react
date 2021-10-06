import propTypes from 'prop-types';

import { Link } from 'react-router-dom';
import logo from '../images/icons/logo.svg';
import logoLight from '../images/icons/logo-light.svg';

const Logo = ({ color }) => {
  return (
    <Link to="/bg">
      <img
        src={color === 'light' ? logoLight : logo}
        alt="logo"
        className="logo"
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
