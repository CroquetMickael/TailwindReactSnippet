import React from "react";
import { TableHead } from "./TableHead.component";

const TableBase = (props) => (
  <table>
    <TableHead
      head={props.head}
      requestSort={props.requestSort}
      sortConfig={props.sortConfig}
      className={props.className}
    />
    <tbody>{props.children}</tbody>
  </table>
);

export { TableBase };
