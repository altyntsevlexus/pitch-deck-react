import { useContext, useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Tr from '../components/Tr';
import { BlocksStateContext } from '../store/blocksContext';

const Table = () => {
  const [blocks, handleBlocks, total] = useContext(BlocksStateContext);
  const [limit, setLimit] = useState('15');

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  };

  useEffect(() => {
    handleBlocks('1', limit);
  }, [limit]);

  return (
    <section className="wrapper table-section text-dark">
      <Logo />
      <div className="table-overflow">
        <select name="limit" onChange={handleChangeLimit} value={limit}>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="70">70</option>
          <option value="100">100</option>
        </select>
        <p>{total}</p>
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
              return (
                <Tr
                  key={Number(block.level)}
                  level={block.level}
                  baker={block.baker}
                  date={block.timestamp}
                  numOfOperations={block.numOfOperations}
                  volume={block.volume}
                  fees={block.fees}
                  endorsements={block.endorsements}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
