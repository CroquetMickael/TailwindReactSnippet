import React, { useState } from "react";
import { usePagination } from "../Hooks/Pagination";
import { Table } from "../Table.component";
import { TableTd } from "../TableTd.component";
const PaginatedTable = (props) => {
  const {
    currentData,
    nextPage,
    previousPage,
    maxPage,
    currentPage,
    jump,
  } = usePagination(props.data, props.itemsPerPage);
  const [pageChoose, setPageChoose] = useState();
  const numberOfElement = () => {
    if (currentPage !== 1) {
      return (
        props.data.length / props.itemsPerPage -
        maxPage +
        props.itemsPerPage * currentPage -
        props.itemsPerPage
      );
    } else {
      return props.data.length / props.itemsPerPage - maxPage + 1;
    }
  };

  const choosingPage = (event) => {
    if (event.key === "Enter") {
      jump(pageChoose);
      setPageChoose(undefined);
    }
  };

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
        <span className="text-xs xs:text-sm text-gray-900">
          Showing {numberOfElement()} to{" "}
          {(props.data.length / maxPage) * currentPage} of {props.data.length}{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
            onClick={() => previousPage()}
          >
            {"<<"}
          </button>
          <input
            className="border-b border-gray-900 border-dashed w-8"
            value={pageChoose}
            onKeyDown={(e) => choosingPage(e)}
            onChange={(e) => setPageChoose(e.target.value)}
          />
          <button
            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
            onClick={() => nextPage()}
          >
            {">>"}
          </button>
        </div>
      </div>
    </>
  );
};

export { PaginatedTable };
