import propTypes from 'prop-types';

import styled from './Circle.module.scss';

const Circle = ({ icon }) => {
  return (
    <div className={styled.circle}>
      <img src={icon} alt="link" className={styled.circle__icon} />
    </div>
  );
};

Circle.propTypes = {
  icon: propTypes.string.isRequired,
};

export default Circle;
