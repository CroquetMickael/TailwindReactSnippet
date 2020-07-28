import React from "react";

const PaginatedTableCounter = (props) => {
  const numberOfElement = () => {
    if (props.currentPage !== 1) {
      return (
        props.itemsLength / props.itemsPerPage -
        props.maxPage +
        props.itemsPerPage * props.currentPage -
        props.itemsPerPage
      );
    } else {
      return props.itemsLength / props.itemsPerPage - props.maxPage + 1;
    }
  };

  return (
    <span className="text-xs xs:text-sm text-gray-900">
      Showing {numberOfElement()} to{" "}
      {(props.itemsLength / props.maxPage) * props.currentPage} of{" "}
      {props.itemsLength} Entries
    </span>
  );
};

export { PaginatedTableCounter };
