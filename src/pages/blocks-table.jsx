/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import Logo from '../components/Logo';
import TrBlock from '../components/TrBlock';
import ThBlock from '../components/ThBlock';
import Pagination from '../components/Pagination';
import { BlocksStateContext } from '../store/blocksContext';

const byField = (field) => (a, b) => {
  if (Number(a[field])) {
    return a[field] - b[field];
  }
  return a[field].localeCompare(b[field]);
};

const Table = () => {
  const { blocks, total, handleBlocks } = useContext(BlocksStateContext);
  const [limit, setLimit] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({
    key: 'level',
    direction: false,
  });

  const onPageChanged = (page) => {
    setCurrentPage(page);
    setSort({
      key: 'level',
      direction: false,
    });
  };

  const onLimitChanged = (e) => {
    setLimit(e.target.value);
    onPageChanged(1);
  };

  const onSortBy = (e) => {
    const { value } = e.target;

    if (sort.key === value) {
      if (sort.direction) {
        blocks.reverse(byField(value));
      } else {
        blocks.sort(byField(value));
      }
      setSort({
        key: value,
        direction: !sort.direction,
      });
    } else {
      setSort({
        key: value,
        direction: true,
      });
      blocks.sort(byField(value));
    }
  };

  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    handleBlocks(offset, limit);
  }, [currentPage, limit]);

  return (
    <section className="wrapper table text-dark">
      <Logo />
      <div className="table__overflow">
        <div className="table__nav">
          <div>
            <p>Show items:</p>
            <select name="limit" onChange={onLimitChanged} value={limit}>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="70">70</option>
              <option value="100">100</option>
            </select>
          </div>
          <p>Total amount: {total}</p>
          <Pagination onPageChanged={onPageChanged} currentPage={currentPage} />
        </div>
        <table>
          <thead>
            <tr>
              <ThBlock
                headerName="Block Id"
                value="level"
                handleSort={onSortBy}
                currentSort={sort}
              />
              <ThBlock
                headerName="Baker"
                value="baker"
                handleSort={onSortBy}
                currentSort={sort}
              />
              <ThBlock
                headerName="Created"
                value="timestamp"
                handleSort={onSortBy}
                currentSort={sort}
              />
              <ThBlock
                headerName="# of operations"
                value="numOfOperations"
                handleSort={onSortBy}
                currentSort={sort}
              />
              <ThBlock
                headerName="Volume"
                value="volume"
                handleSort={onSortBy}
                currentSort={sort}
              />
              <ThBlock
                headerName="Fees"
                value="fees"
                handleSort={onSortBy}
                currentSort={sort}
              />
              <ThBlock
                headerName="Endorsements"
                value="endorsements"
                handleSort={onSortBy}
                currentSort={sort}
              />
            </tr>
          </thead>
          <tbody>
            {blocks.map((block) => {
              return <TrBlock key={Number(block.level)} block={block} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
