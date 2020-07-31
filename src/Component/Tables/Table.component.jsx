import React, { useState } from "react";
import { ElementCounter } from "../../Common/Paginated/ElementCounter.component";
import { PageSelect } from "../../Common/Paginated/PageSelect.component";
import { usePagination } from "../../Common/Paginated/Hooks/Pagination";
import { useSortableData } from "../../Common/Sort/Hooks/Sort";
import { TableBase } from "../Tables/TableBase.component";
import { TableTd } from "../Tables/TableTd.component";
import { TableTop } from "./TableTop.component";

const Table = (props) => {
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
      <div class="relative w-32 py-2 px-2">
        <TableTop {...props.options} setItemsPerPage={setItemsPerPage} />
      </div>
      <TableBase
        head={props.head}
        requestSort={requestSort}
        sortConfig={sortConfig}
      >
        {currentData(props.paginated).map((data) => {
          return (
            <tr>
              {props.head.map((head) => (
                <TableTd>{data[head.value]}</TableTd>
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
            jump={jump}
          />
        </div>
      ) : null}
    </>
  );
};

export { Table };
