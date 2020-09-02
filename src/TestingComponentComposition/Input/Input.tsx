import React, { ChangeEvent } from "react";

interface InputProps {
  value?: string;
  placeHolder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => (
  <input
    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm 
    placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
    value={props.value}
    placeholder={props.placeHolder}
    onChange={props.onChange}
  />
);

export { Input };
