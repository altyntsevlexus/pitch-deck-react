/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import Logo from '../components/Logo';
import TrBlock from '../components/TrBlock';
import ThBlock from '../components/ThBlock';
import Pagination from '../components/Pagination';
import { BlocksStateContext } from '../store/blocksContext';

const HEADERS = [
  {
    name: 'Block Id',
    sortBy: 'level',
  },
  {
    name: 'Baker',
    sortBy: 'baker',
  },
  {
    name: 'Created',
    sortBy: 'timestamp',
  },
  {
    name: '# of operations',
    sortBy: 'numOfOperations',
  },
  {
    name: 'Volume',
    sortBy: 'volume',
  },
  {
    name: 'Fees',
    sortBy: 'fees',
  },
  {
    name: 'Endorsements',
    sortBy: 'endorsements',
  },
];

const byField = (field) => (a, b) => {
  if (Number(a[field])) {
    return a[field] - b[field];
  }
  return a[field].localeCompare(b[field]);
};

const BlocksTable = () => {
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
              {HEADERS.map((header) => {
                return (
                  <ThBlock
                    key={header.sortBy}
                    headerName={header.name}
                    sortBy={header.sortBy}
                    handleSort={onSortBy}
                    currentSort={sort}
                  />
                );
              })}
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

export default BlocksTable;
