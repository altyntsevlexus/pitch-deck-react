import propTypes from 'prop-types';

import Logo from '../../components/Logo';
import Socials from '../../components/Socials';

import iphone from '../../images/iphone.png';

import styled from './cover.module.scss';

const setAsideBackground = (theme) => {
  switch (theme) {
    case 'primary':
      return styled['cover__aside-primary'];
    case 'alt':
      return styled['cover__aside-alt'];
    default:
      return styled.cover__aside;
  }
};

const Cover = ({ theme }) => {
  return (
    <section className={`wrapper split-screen ${styled.cover}`}>
      <aside className={`split-screen__aside ${setAsideBackground(theme)}`}>
        {theme === 'primary' && (
          <img src={iphone} alt="iphone" className={styled.cover__iphone} />
        )}
      </aside>
      {theme === 'alt' ? (
        <main className={`split-screen__main ${styled['cover__main-alt']}`}>
          <Logo />
          <h1 className={styled['cover__title-alt']}>Company Name</h1>
          <p className={styled['cover__description-alt']}>
            Give a short, strong elevator pitch here.
          </p>
        </main>
      ) : (
        <main className="split-screen__main">
          <Logo />
          <h1 className={styled.cover__title}>Company Name</h1>
          <p className={styled.cover__description}>
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
