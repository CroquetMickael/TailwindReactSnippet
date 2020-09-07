import React, { useState } from "react";
import { usePagination } from "../../Common/Hooks/Pagination";
import { useSortableData } from "../../Common/Hooks/Sort";
import { TableTop } from "./TableTop.component";
import { useSearch } from "../../Common/Hooks/Searchable";
import { TableBot } from "./TableBot.component";
import { TableHead } from "./TableHead.component";

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
  class: {
    tr: string;
    td: string;
    th: string;
    table: string;
  };
  /**
   * Defaut number of item for a page
   */
  itemsPerPage: number;
  /**
   * Activate or not the pagination
   */
  paginated: boolean;
  /**
   * **top** : Expect a Component that will wrap his props, props should be :
   *
   * **searchInput** : Component with props placeHolder & searchableValue (list of string)
   *
   *  **itemsSelect** : Component select that accept options (list of anything)
   *
   * **bot** : Expect a Component that will wrap his props, props should be :
   *
   * **left/right** : A button component that will have a children implement
   *
   * **jumper** : Input component
   */
  component?: {
    top?: JSX.Element;
    bot?: JSX.Element;
  };
}
const Table = (props: TableProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(props.itemsPerPage);
  const [searchVal, setSearchValue] = useState(null);
  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const { filteredData } = useSearch(
    searchVal,
    items,
    props.component?.top?.props.searchInput.props.searchableValue || []
  );
  const {
    currentData,
    nextPage,
    previousPage,
    maxPage,
    currentPage,
    jump,
  } = usePagination(filteredData(false), itemsPerPage);

  return (
    <>
      {props.component?.top ? (
        <TableTop
          top={props.component?.top}
          paginated={props.paginated}
          setItemsPerPage={setItemsPerPage}
          setSearchValue={setSearchValue}
        />
      ) : null}
      <table className={props.class.table}>
        <TableHead
          head={props.head}
          requestSort={requestSort}
          sortConfig={sortConfig}
          className={{ th: props.class.th }}
        />
        <tbody>
          {currentData(props.paginated).map((data: any, index: number) => {
            return (
              <tr key={index} className={props.class.tr}>
                {props.head.map((head, index) => (
                  <td className={props.class.td} key={index}>
                    {data[head.value]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {props.paginated !== false ? (
        <TableBot
          bot={props.component?.bot}
          jump={jump}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      ) : null}
    </>
  );
};
export { Table };
