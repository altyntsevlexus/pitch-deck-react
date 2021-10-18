import Logo from '../components/Logo';

const Target = () => {
  return (
    <section className="wrapper split-screen target text-dark">
      <aside className="split-screen__aside target__aside" />
      <main className="split-screen__main">
        <Logo />
        <h1 className="info-title">Target Customer</h1>
        <ul className="info-list">
          <li className="info-list__item">
            <h2 className="info-list__title">Product Manager</h2>
            <p className="info-list__description">
              List an appealing fact about your target customer here.
            </p>
          </li>
          <li className="info-list__item">
            <h2 className="info-list__title">$200k+ Income</h2>
            <p className="info-list__description">
              List an appealing fact about your target customer here.
            </p>
          </li>
          <li className="info-list__item">
            <h2 className="info-list__title">Decision Maker</h2>
            <p className="info-list__description">
              List an appealing fact about your target customer here.
            </p>
          </li>
          <li className="info-list__item">
            <h2 className="info-list__title">Metro Area</h2>
            <p className="info-list__description">
              List an appealing fact about your target customer here.
            </p>
          </li>
        </ul>
        <p className="target__description">
          In this city alone, there are 1M product managers.
        </p>
      </main>
    </section>
  );
};

export default Target;
