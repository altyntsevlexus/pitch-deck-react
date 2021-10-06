import propTypes from 'prop-types';

const Circle = ({ icon }) => {
  return (
    <div className="circle">
      <img src={icon} alt="link" className="circle__icon" />
    </div>
  );
};

Circle.propTypes = {
  icon: propTypes.string.isRequired,
};

export default Circle;
