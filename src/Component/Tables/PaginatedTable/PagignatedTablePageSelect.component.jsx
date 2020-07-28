import React, { useState } from "react";

const PaginatedTablePageSelect = (props) => {
  const [pageChoose, setPageChoose] = useState();
  const choosingPage = (event) => {
    if (event.key === "Enter") {
      props.jump(pageChoose);
    }
  };
  return (
    <div className="inline-flex mt-2 xs:mt-0">
      <button
        className="text-sm bg-blue-200 hover:bg-blue-300 text-gray-800 font-semibold py-2 px-4 rounded-l"
        onClick={() => props.previousPage()}
      >
        {"<<"}
      </button>
      <input
        className="border-b border-gray-900 border-dashed w-6 mx-4"
        value={props.pageChoose}
        onKeyDown={(e) => choosingPage(e)}
        onChange={(e) => setPageChoose(e.target.value)}
      />
      <button
        className="text-sm bg-blue-200 hover:bg-blue-300 text-gray-800 font-semibold py-2 px-4 rounded-r"
        onClick={() => props.nextPage()}
      >
        {">>"}
      </button>
    </div>
  );
};

export { PaginatedTablePageSelect };
