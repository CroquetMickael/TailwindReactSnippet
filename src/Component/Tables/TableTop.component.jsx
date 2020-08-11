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
    {props.search !== undefined && props.search.searchableValue?.length ? (
      <SearchableInput
        setSearchValue={props.setSearchValue}
        placeholder={props.search.placeholder}
      />
    ) : null}
  </>
);

export { TableTop };
