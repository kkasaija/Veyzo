import { useMemo, useState } from 'react';

const usePagination = (items, itemsPerPage = 12) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  return {
    currentPage,
    totalPages,
    paginatedItems,
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
