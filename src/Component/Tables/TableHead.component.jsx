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
                getClassNamesFor(head.value) +
                ` px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200 cursor-pointer hover:bg-gray-300`
              }
            >
              {head.show}
            </th>
          ) : (
            <th
              key={index}
              className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
            >
              {head.show}
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

export { TableHead };