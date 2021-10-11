import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Tr from '../components/Tr';
import fetchBlocks from '../api/index';

const Table = () => {
  const [blocks, setBlocks] = useState([{}]);

  useEffect(() => {
    fetchBlocks().then((data) => setBlocks(data));
  }, []);

  return (
    <section className="wrapper bg text-light">
      <Logo color="light" />
      <div className="table-overflow">
        <table className="table">
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
