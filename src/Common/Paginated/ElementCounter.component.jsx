import React from "react";

const ElementCounter = (props) => {
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
    <span className="text-xs text-gray-900 xs:text-sm">
      Showing {numberOfElement()} to{" "}
      {(props.itemsLength / props.maxPage) * props.currentPage} of{" "}
      {props.itemsLength} Entries
    </span>
  );
};

export { ElementCounter };
