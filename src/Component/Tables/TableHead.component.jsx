import React from "react";

const TableHead = (props) => (
  <thead>
    <tr>
      {props.head.map((head, index) => (
        <th
          key={index}
          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          {head}
        </th>
      ))}
    </tr>
  </thead>
);

export { TableHead };
