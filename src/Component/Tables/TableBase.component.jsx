import React from "react";
import { TableHead } from "./TableHead.component";
import { TableTd } from "./TableTd.component";

const TableBase = (props) => (
  <table className="min-w-full leading-normal">
    <TableHead
      head={props.head}
      sort={props.sort}
      requestSort={props.requestSort}
    />
    <tbody>{props.children}</tbody>
  </table>
);

export { TableBase };
