import { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const Pagination = ({ onPageChanged, currentPage }) => {
  const [pages, setPages] = useState([]);

  const handlePages = (page) => {
    if (page <= 3) {
      return [1, 2, 3, 4, 5];
    }
    return [page - 2, page - 1, page, page + 1, page + 2];
  };

  useEffect(() => {
    setPages(handlePages(currentPage));
  }, [currentPage]);

  const handleClick = (e) => {
    onPageChanged(Number(e.target.value));
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChanged(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    onPageChanged(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination__item"
        onClick={handlePreviousPage}
      >
        {'<'}
      </button>
      {pages.map((pageNum) => {
        return (
          <button
            type="button"
            key={pageNum}
            value={pageNum}
            onClick={handleClick}
            className={`pagination__item ${
              pageNum === currentPage ? 'pagination__item--t--active' : ''
            }`}
          >
            {pageNum}
          </button>
        );
      })}
      <button
        type="button"
        className="pagination__item"
        onClick={handleNextPage}
      >
        {'>'}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onPageChanged: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default Pagination;
