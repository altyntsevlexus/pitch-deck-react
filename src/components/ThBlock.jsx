import propTypes from 'prop-types';

const ThBlock = ({ headerName, sortBy, currentSort, handleSort }) => {
  const sortArrow = () => {
    if (sortBy === currentSort.key) {
      return currentSort.direction
        ? String.fromCharCode(8593)
        : String.fromCharCode(8595);
    }
    return null;
  };

  return (
    <th>
      <button type="button" value={sortBy} onClick={handleSort}>
        {headerName} {sortArrow()}
      </button>
    </th>
  );
};

ThBlock.propTypes = {
  headerName: propTypes.string.isRequired,
  sortBy: propTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  currentSort: propTypes.object,
  handleSort: propTypes.func,
};

ThBlock.defaultProps = {
  sortBy: '',
  handleSort: () => null,
  currentSort: {},
};

export default ThBlock;
