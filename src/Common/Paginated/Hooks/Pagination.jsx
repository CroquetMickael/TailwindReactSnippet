import { useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / parseInt(itemsPerPage));
  function currentData(paginated) {
    if (paginated !== false) {
      const begin = (currentPage - 1) * parseInt(itemsPerPage);
      const end = begin + parseInt(itemsPerPage);
      return data.slice(begin, end);
    }
    return data;
  }

  function nextPage() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function previousPage() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return {
    nextPage,
    previousPage,
    jump,
    currentData,
    currentPage,
    maxPage,
  };
}

export { usePagination };
