import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

import styled from './noMatch.module.scss';

const NoMatch = () => {
  return (
    <section className={`wrapper ${styled.noMatch}`}>
      <Logo />
      <h1 className={styled.noMatch__title}>
        Oops... The page you were looking for doesn&#39;t exist
      </h1>
      <Link to="/" className={styled.noMatch__button}>
        Go Back
      </Link>
    </section>
  );
};

export default NoMatch;
