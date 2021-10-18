import Logo from '../components/Logo';

import team0 from '../images/team-0.png';
import team1 from '../images/team-1.png';
import team2 from '../images/team-2.png';
import team3 from '../images/team-3.png';

const Team = () => {
  return (
    <section className="wrapper team ">
      <Logo />
      <main className="team__about">
        <h1 className="team__title">Meet the Team</h1>
        <p className="team__description">
          A description about your team goes here. Talk about your values,
          mission, and anything else you think would be helpful or relevant for
          investors to know. A description about your team goes here.
        </p>
      </main>
      <ul className="team__list">
        <li className="team__item">
          <img src={team0} alt="teammate" className="team__img" />
          <div>
            <p className="team__name">Charlie Kelly</p>
            <p className="team__description">SEO</p>
          </div>
        </li>
        <li className="team__item">
          <img src={team1} alt="teammate" className="team__img" />
          <div>
            <p className="team__name">Sandra Alta</p>
            <p className="team__description">CMO</p>
          </div>
        </li>
        <li className="team__item">
          <img src={team2} alt="teammate" className="team__img" />
          <div>
            <p className="team__name">Sandra Alta</p>
            <p className="team__description">CMO</p>
          </div>
        </li>
        <li className="team__item">
          <img src={team3} alt="teammate" className="team__img" />
          <div>
            <p className="team__name">Joe Black</p>
            <p className="team__description">CMO</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Team;
