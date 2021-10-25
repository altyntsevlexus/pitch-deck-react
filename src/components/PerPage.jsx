import propTypes from 'prop-types';

const PerPage = ({ limit, handleChangeLimit }) => {
  return (
    <div>
      <p>Show items:</p>
      <select name="limit" onChange={handleChangeLimit} value={limit}>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="70">70</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

PerPage.propTypes = {
  limit: propTypes.string.isRequired,
  handleChangeLimit: propTypes.func.isRequired,
};

export default PerPage;
