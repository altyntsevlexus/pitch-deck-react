import propTypes from 'prop-types';

import Th from '../Th';

import styled from './Table.module.scss';

const Table = ({ cols, rows, currentSort, sortFunction }) => {
  return (
    <table className={styled.table}>
      <thead>
        <tr>
          {cols.map((col) => {
            return (
              <Th
                key={col.key}
                headerName={col.name}
                sortBy={col.key}
                sortFunction={sortFunction}
                currentSort={currentSort}
              />
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.level}>
              {cols.map((col) => (
                <td key={row[col.key]}>{row[col.key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  cols: propTypes.arrayOf({}).isRequired,
  rows: propTypes.arrayOf({}).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentSort: propTypes.object,
  sortFunction: propTypes.func,
};

Table.defaultProps = {
  sortFunction: () => null,
  currentSort: {},
};

export default Table;
