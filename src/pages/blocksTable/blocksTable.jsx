/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useBlocksState } from '../../store/blocksContext';

import Logo from '../../components/Logo';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import PerPage from '../../components/PerPage';

import styled from './blocksTable.module.scss';

const HEADERS = [
  {
    name: 'Block Id',
    key: 'level',
  },
  {
    name: 'Baker',
    key: 'baker',
  },
  {
    name: 'Created',
    key: 'timestamp',
  },
  {
    name: '# of operations',
    key: 'numOfOperations',
  },
  {
    name: 'Volume',
    key: 'volume',
  },
  {
    name: 'Fees',
    key: 'fees',
  },
  {
    name: 'Endorsements',
    key: 'endorsements',
  },
];

const byField = (field) => (a, b) => {
  if (Number(a[field])) {
    return a[field] - b[field];
  }
  return a[field].localeCompare(b[field]);
};

const BlocksTable = () => {
  const { blocks, total, handleBlocks } = useBlocksState();
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
    <section className={`wrapper ${styled.blocksTable}`}>
      <Logo />
      <div className={styled.blocksTable__overflow}>
        <div className={styled.blocksTable__nav}>
          <PerPage limit={limit} handleChangeLimit={onLimitChanged} />
          <p>Total amount: {total}</p>
          <Pagination onPageChanged={onPageChanged} currentPage={currentPage} />
        </div>
        <Table
          cols={HEADERS}
          rows={blocks}
          currentSort={sort}
          sortFunction={onSortBy}
        />
      </div>
    </section>
  );
};

export default BlocksTable;
