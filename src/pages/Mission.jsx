import Logo from '../components/Logo';

const Mission = () => {
  return (
    <section className="wrapper split-screen mission">
      <aside className="split-screen__aside mission__aside" />
      <main className="split-screen__main">
        <Logo />
        <h1 className="info-title">Our mission</h1>
        <ul className="info-list mission__list">
          <li className="info-list__item">
            <h2 className="info-list__title">Become the #1 Platform</h2>
            <p className="info-list__description">
              There is an opportunity to become the go-to platform for product
              managers.
            </p>
          </li>
          <li className="info-list__item">
            <h2 className="info-list__title">Create a Great Community</h2>
            <p className="info-list__description">
              We want to help others by creating a community where people can
              get answers to questions.
            </p>
          </li>
          <li className="info-list__item">
            <h2 className="info-list__title">Lead by Example</h2>
            <p className="info-list__description">
              Our goal is to become the industry leader by fostering great
              relationships.
            </p>
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Mission;
