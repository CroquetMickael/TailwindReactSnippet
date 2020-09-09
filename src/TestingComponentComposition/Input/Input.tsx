import React, { ChangeEvent } from "react";

interface InputProps {
  value?: string;
  placeHolder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  searchableValue?: string[];
  autocomplete?: boolean;
  onClick?: () => void;
}

const Input = (props: InputProps) => (
  <>
    <input
      className="flex-1 block px-6 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
      value={props.value}
      placeholder={props.placeHolder}
      onChange={props.onChange}
    />
    {props.autocomplete ? (
      <button
        className="block px-6 py-2 text-sm bg-red-300 border border-b border-gray-400 rounded-r appearance-none hover:bg-red-500 sm:rounded-l-none"
        onClick={props.onClick}
      >
        X
      </button>
    ) : null}
  </>
);

export { Input };
