import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Circle from './Circle';

import linkImg from '../images/icons/link.svg';
import facebookImg from '../images/icons/facebook.svg';
import twitterImg from '../images/icons/twitter.svg';

const Socials = ({ website, facebook, twitter }) => {
  return (
    <ul className="socials">
      <li className="socials__item">
        <Circle icon={linkImg} />
        <Link to="/">{website}</Link>
      </li>
      <li className="socials__item">
        <Circle icon={facebookImg} />
        <Link to="/">{facebook}</Link>
      </li>
      <li className="socials__item">
        <Circle icon={twitterImg} />
        <Link to="/">{twitter}</Link>
      </li>
    </ul>
  );
};

Socials.propTypes = {
  website: propTypes.string,
  facebook: propTypes.string,
  twitter: propTypes.string,
};

Socials.defaultProps = {
  website: 'www.website.com',
  facebook: '@companyhandle',
  twitter: '@companyhandle',
};

export default Socials;
