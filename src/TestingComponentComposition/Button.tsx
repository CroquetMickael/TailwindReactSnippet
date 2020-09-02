import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: string;
}
const Button = (props: ButtonProps) => (
  <button
    className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-r hover:bg-blue-900"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export { Button };
