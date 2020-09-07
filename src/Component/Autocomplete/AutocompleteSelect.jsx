import React, { useState } from "react";
import { useSearch } from "../../Common/Hooks/Searchable";

const AutocompleteSelect = (props) => {
  const [searchVal, setSearchValue] = useState(null);
  const { filteredData } = useSearch(
    searchVal,
    props.items,
    props.searchInput?.props.searchableValue || []
  );
  return (
    <>
      <div className={props.class} onClick={() => filteredData(false)}>
        {React.cloneElement(props.Label, {
          data: props.selectedItems,
          setSearchable: setSearchValue,
        })}
        {props.searchInput !== undefined
          ? React.cloneElement(props.searchInput, {
              onChange: (e) => setSearchValue(e.target.value),
              value: searchVal,
            })
          : null}
      </div>
      {React.cloneElement(props.listComponent, {
        data: filteredData(true),
        setSearchable: setSearchValue,
      })}
    </>
  );
};

export { AutocompleteSelect };
