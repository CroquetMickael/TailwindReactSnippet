import React from "react";
import { ItemsNumberSelect } from "./TableTop/ItemsNumberSelect.component";
import { SearchableInput } from "./TableTop/SearchableInput.component";
const TableTop = (props) => (
  <>
    {props.numberItemsOptions.permitChange !== false &&
    props.paginated !== false ? (
      <ItemsNumberSelect {...props} />
    ) : null}
    {props.search.activate !== false ? (
      <SearchableInput
        setSearchValue={props.setSearchValue}
        placeholder={props.search.placeholder}
      />
    ) : null}
  </>
);

export { TableTop };
