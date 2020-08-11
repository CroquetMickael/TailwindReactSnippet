import React from "react";
import { ItemsNumberSelect } from "./TableTop/ItemsNumberSelect.component";
import { SearchableInput } from "./TableTop/SearchableInput.component";
const TableTop = (props) => (
  <>
    {props.paginated !== false &&
    props.numberItemsOptions !== undefined &&
    props.numberItemsOptions?.length ? (
      <ItemsNumberSelect {...props} />
    ) : null}
    {props.search.searchableValue?.length && props.searchInput !== undefined
      ? React.cloneElement(props.searchInput, {
          onChange: (e) => props.setSearchValue(e.target.value),
        })
      : null}
  </>
);

export { TableTop };
