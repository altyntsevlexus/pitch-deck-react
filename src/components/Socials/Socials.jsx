import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Circle from '../Circle/Circle';

import linkImg from '../../images/icons/link.svg';
import facebookImg from '../../images/icons/facebook.svg';
import twitterImg from '../../images/icons/twitter.svg';

import styled from './socials.module.scss';

const Socials = ({ website, facebook, twitter }) => {
  return (
    <ul className={styled.socials}>
      <li className={styled.socials__item}>
        <Circle icon={linkImg} />
        <Link to="/">{website}</Link>
      </li>
      <li className={styled.socials__item}>
        <Circle icon={facebookImg} />
        <Link to="/">{facebook}</Link>
      </li>
      <li className={styled.socials__item}>
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
