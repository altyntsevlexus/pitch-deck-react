import propTypes from 'prop-types';

const Tr = ({
  level,
  baker,
  date,
  numOfOperations,
  volume,
  fees,
  endorsements,
}) => {
  return (
    <tr>
      <td>{level}</td>
      <td>{baker}</td>
      <td>{date}</td>
      <td>{numOfOperations}</td>
      <td>{volume}</td>
      <td>{fees}</td>
      <td>{endorsements}</td>
    </tr>
  );
};

Tr.propTypes = {
  level: propTypes.string,
  baker: propTypes.string,
  date: propTypes.string,
  numOfOperations: propTypes.string,
  volume: propTypes.string,
  fees: propTypes.string,
  endorsements: propTypes.string,
};

Tr.defaultProps = {
  level: '---',
  baker: '---',
  date: '---',
  numOfOperations: '---',
  volume: '---',
  fees: '---',
  endorsements: '---',
};

export default Tr;
