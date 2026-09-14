import './pagination.scss';

const Pagination = ({ currentPage, visiblePages, hasPreviousPage, hasNextPage, onPageChange }) => {
  return (
    <nav className="pagination">
      <button
        className="pagination__button"
        disabled={!hasPreviousPage}
        onClick={() => onPageChange(currentPage - 1)}
      >
        prev
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          className={`pagination__button ${
            currentPage === page ? 'pagination__button--active' : ''
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination__button"
        disabled={!hasNextPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        next
      </button>
    </nav>
  );
};

export default Pagination;
