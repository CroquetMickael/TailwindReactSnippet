import React, { useState } from "react";
import { useSearch } from "../../Common/Hooks/Searchable";

const AutocompleteSelect = (props) => {
  const [searchValue, setSearchValue] = useState(null);
  const { filteredData } = useSearch(
    searchValue,
    props.items,
    props.searchInput?.props.searchableValue || []
  );
  return (
    <>
      <div className={props.class}>
        {props.label !== undefined
          ? React.cloneElement(props.label, {
              data: props.selectedItems,
              setSearchable: setSearchValue,
            })
          : null}
        {React.cloneElement(props.searchInput, {
          onChange: (e) => {
            setSearchValue(e.target.value);
          },
          value: searchValue,
          onClick: () => {
            setSearchValue("");
          },
        })}
      </div>
      {React.cloneElement(props.listComponent, {
        data: filteredData(true),
        setSearchable: setSearchValue,
      })}
    </>
  );
};

export { AutocompleteSelect };
