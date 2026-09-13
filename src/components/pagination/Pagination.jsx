import './pagination.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav>
      <button
        className="pagination__button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        back
      </button>
      {Array(totalPages)
        .fill(null)
        .map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={
                currentPage === page
                  ? 'pagination__button pagination__button--active'
                  : 'pagination__button'
              }
            >
              {page}
            </button>
          );
        })}
      <button
        className="pagination__button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        next
      </button>
    </nav>
  );
};

export default Pagination;
