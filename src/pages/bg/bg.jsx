import Logo from '../../components/Logo/Logo';

import styled from './bg.module.scss';

const Bg = () => {
  return (
    <section className={`wrapper ${styled.bg}`}>
      <Logo color="light" />
      <h1 className={styled.bg__title}>
        Introducing: the next generation of online payments.
      </h1>
    </section>
  );
};

export default Bg;
