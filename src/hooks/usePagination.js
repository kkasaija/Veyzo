import { useMemo, useState } from 'react';

const usePagination = (items, itemsPerPage = 12) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPages, paginatedItems, visiblePages, hasPreviousPage, hasNextPage } = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedItems = items.slice(startIndex, endIndex);

    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(currentPage + 2, totalPages);

    const visiblePages = Array.from(
      { length: Math.max(endPage - startPage + 1, 0) },
      (_, index) => startPage + index
    );

    return {
      totalPages,
      paginatedItems,
      visiblePages,
      hasPreviousPage: currentPage > 1,
      hasNextPage: currentPage < totalPages,
    };
  }, [items, currentPage, itemsPerPage]);

  return {
    currentPage,
    totalPages,
    paginatedItems,
    visiblePages,
    hasPreviousPage,
    hasNextPage,
    setCurrentPage,
  };
};

export default usePagination;
