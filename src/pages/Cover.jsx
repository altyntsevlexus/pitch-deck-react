import propTypes from 'prop-types';

import Logo from '../components/Logo';
import Socials from '../components/Socials';

import iphone from '../images/iphone.png';

const setAsideBackground = (theme) => {
  switch (theme) {
    case 'primary':
      return 'cover__aside-primary';
    case 'alt':
      return 'cover__aside-alt';
    default:
      return 'cover__aside';
  }
};

const Cover = ({ theme }) => {
  return (
    <section className="wrapper split-screen cover text-dark">
      <aside className={`split-screen__aside ${setAsideBackground(theme)}`}>
        {theme === 'primary' && (
          <img src={iphone} alt="iphone" className="cover__iphone" />
        )}
      </aside>
      {theme === 'alt' ? (
        <main className="split-screen__main cover__main-alt">
          <Logo />
          <h1 className="fs-144 cover__title">Company Name</h1>
          <p className="fs-48">Give a short, strong elevator pitch here.</p>
        </main>
      ) : (
        <main className="split-screen__main">
          <Logo />
          <h1 className="fs-72 cover__title">Company Name</h1>
          <p className="cover__description fs-48">
            Intriguing summary goes here. Keep it short & sweet. Describe the
            problem you are solving. Focus on the pain point.
          </p>
          <Socials
            website="www.website.com"
            twitter="@compahyhandle"
            facebook="@compahyhandle"
          />
        </main>
      )}
    </section>
  );
};

Cover.propTypes = {
  theme: propTypes.string,
};

Cover.defaultProps = {
  theme: '',
};

export default Cover;
