import React from "react";

const InputJumper = (props) => (
  <input
    className="w-6 mx-4 border-b border-gray-900 border-dashed text-center"
    value={props.pageChoose}
    onKeyDown={props.onKeyDown}
    onChange={props.onChange}
  />
);

export { InputJumper };
