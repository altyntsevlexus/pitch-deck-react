/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import Logo from '../components/Logo';
import TrBlock from '../components/TrBlock';
import Pagination from '../components/Pagination';
import { BlocksStateContext } from '../store/blocksContext';

const Table = () => {
  const { blocks, total, handleBlocks } = useContext(BlocksStateContext);
  const [limit, setLimit] = useState(15);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChanged = (page) => {
    setCurrentPage(page);
    setOffset((page - 1) * limit);
  };

  const onLimitChanged = (e) => {
    setLimit(e.target.value);
    onPageChanged(1);
  };

  useEffect(() => {
    handleBlocks(offset, limit);
  }, [offset, limit]);

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
              <th>Block ID</th>
              <th>Baker</th>
              <th>Created</th>
              <th># of operations</th>
              <th>Volume</th>
              <th>Fees</th>
              <th>Endorsements</th>
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
