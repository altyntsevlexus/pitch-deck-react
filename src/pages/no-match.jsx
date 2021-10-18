import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const NoMatch = () => {
  return (
    <section className="wrapper no-match text-dark">
      <Logo />
      <h1 className="no-match__title">
        Oops... The page you were looking for doesn&#39;t exist
      </h1>
      <Link to="/" className="no-match__button">
        Go Back
      </Link>
    </section>
  );
};

export default NoMatch;
