import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const NoMatch = () => {
  return (
    <section className="wrapper no-match text-dark">
      <Logo />
      <h1 className="fs-72">
        Oops... The page you were looking for doesn&#39;t exist
      </h1>
      <Link to="/" className="no-match__button fs-34">
        Go Back
      </Link>
    </section>
  );
};

export default NoMatch;
