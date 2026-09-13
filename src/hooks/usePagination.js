import { useMemo, useState, useEffect } from 'react';

const usePagination = (items, itemsPerPage = 12) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [items, currentPage]);

  const { totalPages, visibleItems } = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const visibleItems = items.slice(startIndex, endIndex);

    return { totalPages, visibleItems };
  }, [items, currentPage, itemsPerPage]);

  return {
    currentPage,
    totalPages,
    visibleItems,
    setCurrentPage,
  };
};

export default usePagination;

// import { useEffect, useMemo, useState } from 'react';

// const usePagination = (items, itemsPerPage = 12) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(items.length / itemsPerPage);
//   useEffect(() => {
//     setCurrentPage((page) =>
//       totalPages === 0 ? 1 : Math.min(page, totalPages)
//     );
//   }, [totalPages]);

//   const paginatedItems = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return items.slice(startIndex, startIndex + itemsPerPage);
//   }, [items, currentPage, itemsPerPage]);

//   return {
//     currentPage,
//     totalPages,
//     paginatedItems,
//     setCurrentPage,
//   };
// };

// export default usePagination;
