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
      {React.cloneElement(props.left, {
        onClick: () => props.previousPage(),
      })}
      {React.cloneElement(props.jumper, {
        onChange: (e) => setPageChoose(e.target.value),
        onKeyDown: (e) => choosingPage(e),
        value: pageChoose,
      })}
      {React.cloneElement(props.right, {
        onClick: () => props.nextPage(),
      })}
    </div>
  );
};

export { PageSelect };
