import React, { useState } from "react";
import { usePagination } from "../Hooks/Pagination";
import { Table } from "../Table.component";
import { TableTd } from "../TableTd.component";
import { PaginatedTablePageSelect } from "./PagignatedTablePageSelect.component";
import { PaginatedTableCounter } from "./PaginatedTableCounter.component";
const PaginatedTable = (props) => {
  const {
    currentData,
    nextPage,
    previousPage,
    maxPage,
    currentPage,
    jump,
  } = usePagination(props.data, props.itemsPerPage);

  return (
    <>
      <Table head={props.head}>
        {currentData().map((data) => (
          <tr>
            <TableTd>{data.nom}</TableTd>
            <TableTd>{data.prenom}</TableTd>
            <TableTd>{data.age}</TableTd>
            <TableTd>{data.actif}</TableTd>
            <TableTd>{data.toto}</TableTd>
          </tr>
        ))}
      </Table>
      <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
        <PaginatedTableCounter
          itemsLength={props.data.length}
          currentPage={currentPage}
          maxPage={maxPage}
          itemsPerPage={props.itemsPerPage}
        />
        <PaginatedTablePageSelect
          nextPage={nextPage}
          previousPage={previousPage}
          jump={jump}
        />
      </div>
    </>
  );
};

export { PaginatedTable };
