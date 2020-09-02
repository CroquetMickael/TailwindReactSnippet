import React from "react";

const TableHead = (props) => {
  const getClassNamesFor = (name) => {
    if (!props.sortConfig) {
      return;
    }
    return props.sortConfig.key === name
      ? props.sortConfig.direction
      : undefined;
  };
  return (
    <thead>
      <tr>
        {props.head.map((head, index) =>
          head.sort !== false ? (
            <th
              key={index}
              onClick={() => props.requestSort(head.value)}
              className={
                getClassNamesFor(head.value) + ` ${props.className?.th}`
              }
            >
              {head.show}
            </th>
          ) : (
            <th key={index} className={props.className?.th}>
              {head.show}
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

export { TableHead };
