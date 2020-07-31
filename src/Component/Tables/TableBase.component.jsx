import React from "react";
import { TableHead } from "./TableHead.component";
import { TableTd } from "./TableTd.component";

const TableBase = (props) => (
  <table className="min-w-full leading-normal">
    <TableHead
      head={props.head}
      requestSort={props.requestSort}
      sortConfig={props.sortConfig}
    />
    <tbody>{props.children}</tbody>
  </table>
);

export { TableBase };
