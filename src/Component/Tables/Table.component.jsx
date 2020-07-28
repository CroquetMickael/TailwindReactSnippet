import React from "react";
import { TableHead } from "./TableHead.component";
import { TableTd } from "./TableTd.component";

const Table = (props) => (
  <table className="min-w-full leading-normal">
    <TableHead head={props.head} />
    <tbody>{props.children}</tbody>
  </table>
);

export { Table };
