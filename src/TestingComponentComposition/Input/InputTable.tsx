import React, { ChangeEvent, KeyboardEvent } from "react";

interface InputTableProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const InputTable = (props: InputTableProps) => (
  <input
    className="w-6 mx-4 border-b border-gray-900 border-dashed text-center"
    value={props.value}
    onKeyDown={props.onKeyDown}
    onChange={props.onChange}
  />
);

export { InputTable };
