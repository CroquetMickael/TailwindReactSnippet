import React, { useState } from "react";
import { ElementCounter } from "../../Common/Paginated/ElementCounter.component";
import { PageSelect } from "../../Common/Paginated/PageSelect.component";
import { usePagination } from "../../Common/Paginated/Hooks/Pagination";
import { useSortableData } from "../../Common/Sort/Hooks/Sort";
import { TableBase } from "./TableBase.component";
import { TableTd } from "./TableTd.component";
import { TableTop } from "./TableTop.component";

export interface TableProps {
  data: Array<any>;
  /**
   *  **show** : This value is just the <th> name displayed
   *
   * **value** : This value need to be as exact the key of your data, like data: {name: "salut"} then you should have here "name", in order to show correctly the data
   */
  head: Array<{
    show: string;
    value: string;
    sort: boolean;
  }>;
  paginated: boolean;
  itemsPerPage: number;
  options: {
    NumberItemsOptions: {
      permitChange: boolean;
      options: Array<number>;
    };
  };
    /**
   *  For th values :
   *  
   * **standard** : The class that just be used like normal className
   * 
   * **hover** : Is the class used when the sort is activated so you can trigger here you need to combine standard class and this one to get a proper things to work
   *
   */
  className?: {
    th?: {
      standard: string;
      hover: string;
    }
    tr?: string;
    td?: string;
    pageSelect?: {
      button: string;
      input: string;
    }
  }
}
const Table = (props: TableProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(props.itemsPerPage);
  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const {
    currentData,
    nextPage,
    previousPage,
    maxPage,
    currentPage,
    jump,
  } = usePagination(items, itemsPerPage);
  return (
    <>
      <div className="py-4">
        <TableTop {...props.options} setItemsPerPage={setItemsPerPage} />
      </div>
      <TableBase
        head={props.head}
        requestSort={requestSort}
        sortConfig={sortConfig}
        className={props.className?.th}
      >
        {currentData(props.paginated).map((data: any, index: number) => {
          return (
            <tr className={props.className?.tr} key={index}>
              {props.head.map((head, index) => (
                <td className={props.className?.td} key={index}>{data[head.value]}</td>
              ))}
            </tr>
          );
        })}
      </TableBase>
      {props.paginated !== false ? (
        <div className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between">
          <ElementCounter
            itemsLength={props.data.length}
            currentPage={currentPage}
            maxPage={maxPage}
            itemsPerPage={itemsPerPage}
          />
          <PageSelect
            nextPage={nextPage} 
            previousPage={previousPage}
            currentPage={currentPage}
            jump={jump}
            className={props.className?.pageSelect}
          />
        </div>
      ) : null}
    </>
  );
};
export { Table };
