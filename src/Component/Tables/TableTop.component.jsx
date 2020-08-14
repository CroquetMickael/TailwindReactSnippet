import React from "react";

const TableTop = (props) => {
  console.log(props.top.props.searchInput.props.searchableValue?.length);
  return (
    <>
      {props.paginated !== false &&
      props.top.props.itemsSelect !== undefined &&
      props.top.props.itemsSelect.props.options?.length
        ? React.cloneElement(props.top.props.itemsSelect, {
            onChange: (e) => props.setItemsPerPage(e.target.value),
          })
        : null}
      {props.top.props.searchInput.props.searchableValue?.length &&
      props.top.props.searchInput !== undefined
        ? React.cloneElement(props.top.props.searchInput, {
            onChange: (e) => props.setSearchValue(e.target.value),
          })
        : null}
    </>
  );
};

export { TableTop };
