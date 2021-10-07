import Logo from '../components/Logo';

const Bg = () => {
  return (
    <section className="wrapper bg text-light">
      <Logo color="light" />
      <h1 className="fs-72 bg__title">
        Introducing: the next generation of online payments.
      </h1>
    </section>
  );
};

export default Bg;
