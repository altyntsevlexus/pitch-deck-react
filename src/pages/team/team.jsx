import Logo from '../../components/Logo/Logo';

import team0 from '../../images/team-0.png';
import team1 from '../../images/team-1.png';
import team2 from '../../images/team-2.png';
import team3 from '../../images/team-3.png';

import styled from './team.module.scss';

const Team = () => {
  return (
    <section className={`wrapper ${styled.team}`}>
      <Logo />
      <main className={styled.team__about}>
        <h1 className={styled.team__title}>Meet the Team</h1>
        <p className={styled.team__description}>
          A description about your team goes here. Talk about your values,
          mission, and anything else you think would be helpful or relevant for
          investors to know. A description about your team goes here.
        </p>
      </main>
      <ul className={styled.team__list}>
        <li className={styled.team__item}>
          <img src={team0} alt={styled.teammate} className={styled.team__img} />
          <div>
            <p className={styled.team__name}>Charlie Kelly</p>
            <p className={styled.team__description}>SEO</p>
          </div>
        </li>
        <li className={styled.team__item}>
          <img src={team1} alt={styled.teammate} className={styled.team__img} />
          <div>
            <p className={styled.team__name}>Sandra Alta</p>
            <p className={styled.team__description}>CMO</p>
          </div>
        </li>
        <li className={styled.team__item}>
          <img src={team2} alt={styled.teammate} className={styled.team__img} />
          <div>
            <p className={styled.team__name}>Sandra Alta</p>
            <p className={styled.team__description}>CMO</p>
          </div>
        </li>
        <li className={styled.team__item}>
          <img src={team3} alt={styled.teammate} className={styled.team__img} />
          <div>
            <p className={styled.team__name}>Joe Black</p>
            <p className={styled.team__description}>CMO</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Team;
