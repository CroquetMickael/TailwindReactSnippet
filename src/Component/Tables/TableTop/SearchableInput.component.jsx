import React from "react";

const SearchableInput = (props) => (
  <div>
    <input
      placeholder={props.placeholder}
      onChange={(e) => props.setSearchValue(e.target.value)}
      className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
    />
  </div>
);

export { SearchableInput };
