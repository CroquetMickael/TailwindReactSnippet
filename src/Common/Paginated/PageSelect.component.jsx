import React, { useState } from "react";

const PageSelect = (props) => {
  const [pageChoose, setPageChoose] = useState();
  const choosingPage = (event) => {
    if (event.key === "Enter") {
      props.jump(pageChoose);
    }
  };
  return (
    <div className="inline-flex mt-2 xs:mt-0">
      <button
        className="px-4 py-2 text-sm font-semibold text-gray-800 bg-blue-200 rounded-l hover:bg-blue-300"
        onClick={() => props.previousPage()}
      >
        {"<<"}
      </button>
      <input
        className="w-6 mx-4 border-b border-gray-900 border-dashed text-center"
        value={props.pageChoose}
        onKeyDown={(e) => choosingPage(e)}
        onChange={(e) => setPageChoose(e.target.value)}
      />
      <button
        className="px-4 py-2 text-sm font-semibold text-gray-800 bg-blue-200 rounded-r hover:bg-blue-300"
        onClick={() => props.nextPage()}
      >
        {">>"}
      </button>
    </div>
  );
};

export { PageSelect };
