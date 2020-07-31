import React from "react";

const TableTop = (props) => {
  return props.NumberItemsOptions.permitChange !== false &&
    props.paginated !== false ? (
    <>
      <select
        className="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={(e) => props.setItemsPerPage(e.target.value)}
      >
        {props.NumberItemsOptions.options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </>
  ) : null;
};

export { TableTop };
