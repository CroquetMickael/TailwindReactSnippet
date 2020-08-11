import React, { useState } from "react";
import { ElementCounter } from "../../Common/Paginated/ElementCounter.component";
import { PageSelect } from "../../Common/Paginated/PageSelect.component";
import { usePagination } from "../../Common/Hooks/Pagination";
import { useSortableData } from "../../Common/Hooks/Sort";
import { TableBase } from "./TableBase.component";
import { TableTop } from "./TableTop.component";
import { useTableSearch } from "../../Common/Hooks/Searchable";

export interface TableProps {
  data: Array<any>;
  /**
   *  **show** : This value is just the <th> name displayed
   *
   * **value** : This value need to be as exact the key of your data, like data: {name: "salut"} then you should have here "name", in order to show correctly the data
   *
   * **sort** : This permit to activate the sorting or not
   */
  head: Array<{
    show: string;
    value: string;
    sort: boolean;
  }>;
  /**
   * Activate or not the pagination
   */
  paginated: boolean;
  itemsPerPage: number;
  options?: {
    searchableValue: string[];
    numberItemsOptions: Array<number>;
  };
  component?: {
    top?: {
      searchInput: JSX.Element;
    };
    pageSelector: {
      left: JSX.Element;
      jumper: JSX.Element;
      right: JSX.Element;
    };
  };
}
const Table = (props: TableProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(props.itemsPerPage);
  const [searchVal, setSearchValue] = useState(null);
  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const { filteredData } = useTableSearch(
    searchVal,
    items,
    props.options?.searchableValue
  );
  const {
    currentData,
    nextPage,
    previousPage,
    maxPage,
    currentPage,
    jump,
  } = usePagination(filteredData, itemsPerPage);

  return (
    <>
      {props.options ? (
        <TableTop
          {...props.component?.top}
          {...props.options}
          paginated={props.paginated}
          setItemsPerPage={setItemsPerPage}
          setSearchValue={setSearchValue}
        />
      ) : null}
      <TableBase
        head={props.head}
        requestSort={requestSort}
        sortConfig={sortConfig}
      >
        {currentData(props.paginated).map((data: any, index: number) => {
          return (
            <tr key={index}>
              {props.head.map((head, index) => (
                <td key={index}>{data[head.value]}</td>
              ))}
            </tr>
          );
        })}
      </TableBase>
      {props.paginated !== false ? (
        <>
          <ElementCounter
            itemsLength={props.data.length}
            currentPage={currentPage}
            maxPage={maxPage}
            itemsPerPage={itemsPerPage}
          />
          <PageSelect
            {...props.component?.pageSelector}
            nextPage={nextPage}
            previousPage={previousPage}
            currentPage={currentPage}
            jump={jump}
          />
        </>
      ) : null}
    </>
  );
};
export { Table };
