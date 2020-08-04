import React from "react";

const ItemsNumberSelect = (props) => {
  return props.NumberItemsOptions.permitChange !== false &&
    props.paginated !== false ? (
    <div className="relative w-16">
      <select
        className="block w-16 h-full px-4 py-2 pr-4 leading-tight text-gray-700 bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={(e) => props.setItemsPerPage(e.target.value)}
      >
        {props.NumberItemsOptions.options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700 pointer-events-none">
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  ) : null;
};

export { ItemsNumberSelect };
