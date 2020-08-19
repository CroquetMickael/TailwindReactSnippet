import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: string;
}
const Button = (props: ButtonProps) => (
  <button
    className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-r hover:bg-gray-300"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export { Button };