import propTypes from 'prop-types';

const ThBlock = ({ headerName, value, currentSort, handleSort }) => {
  const sortArrow = () => {
    if (value === currentSort.key) {
      return currentSort.direction
        ? String.fromCharCode(8593)
        : String.fromCharCode(8595);
    }
    return null;
  };

  return (
    <th>
      <button type="button" value={value} onClick={handleSort}>
        {headerName} {sortArrow()}
      </button>
    </th>
  );
};

ThBlock.propTypes = {
  headerName: propTypes.string.isRequired,
  value: propTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  currentSort: propTypes.object,
  handleSort: propTypes.func,
};

ThBlock.defaultProps = {
  value: '',
  handleSort: () => null,
  currentSort: {},
};

export default ThBlock;
