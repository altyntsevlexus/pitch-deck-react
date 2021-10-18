import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

import styled from './no-match.module.scss';

const NoMatch = () => {
  return (
    <section className={`wrapper ${styled['no-match']}`}>
      <Logo />
      <h1 className={styled['no-match__title']}>
        Oops... The page you were looking for doesn&#39;t exist
      </h1>
      <Link to="/" className={styled['no-match__button']}>
        Go Back
      </Link>
    </section>
  );
};

export default NoMatch;
