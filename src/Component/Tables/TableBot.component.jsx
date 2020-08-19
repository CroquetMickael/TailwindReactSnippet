import React, { useState } from "react";

const TableBot = (props) => {
  const [pageChoose, setPageChoose] = useState();
  const choosingPage = (event) => {
    if (event.key === "Enter") {
      props.jump(pageChoose);
    }
  };
  return React.cloneElement(
    props.bot,
    {},
    <>
      {React.cloneElement(props.bot.props.left, {
        onClick: () => props.previousPage(),
      })}
      {React.cloneElement(props.bot.props.jumper, {
        onChange: (e) => setPageChoose(e.target.value),
        onKeyDown: (e) => choosingPage(e),
        value: pageChoose,
      })}
      {React.cloneElement(props.bot.props.right, {
        onClick: () => props.nextPage(),
      })}
    </>
  );
};

export { TableBot };
