import React, { ChangeEvent } from "react";

interface InputProps {
  value?: string;
  placeHolder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  searchableValue?: string[];
  autocomplete?: boolean;
  onClick?: () => void;
  onKeyDown?: () => void;
}

const Input = (props: InputProps) => (
  <>
    {props.autocomplete ? (
      <>
        <input
          className="flex-1 block px-6 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l appearance-none focus:border-gray-600 sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          value={props.value}
          placeholder={props.placeHolder}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
        <button
          className="block px-6 py-2 text-sm text-gray-400 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none hover:text-gray-700 sm:rounded-l-none"
          onClick={props.onClick}
        >
          X
        </button>
      </>
    ) : (
      <input
        className="flex-1 block px-6 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none focus:border-gray-600 sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
        value={props.value}
        placeholder={props.placeHolder}
        onChange={props.onChange}
      />
    )}
  </>
);

export { Input };
