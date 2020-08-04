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
        className={props.className?.button}
        onClick={() => props.previousPage()}
      >
        {"<<"}
      </button>
      <input
        className={props.className?.input}
        value={props.pageChoose}
        onKeyDown={(e) => choosingPage(e)}
        onChange={(e) => setPageChoose(e.target.value)}
      />
      <button
        className={props.className?.button}
        onClick={() => props.nextPage()}
      >
        {">>"}
      </button>
    </div>
  );
};

export { PageSelect };
