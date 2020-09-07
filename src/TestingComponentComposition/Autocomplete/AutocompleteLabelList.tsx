import React from "react";

interface AutoCompleteListProps {
  data?: any[];
  onClick: (item: any, index: number) => void;
}

const AutoCompleteLabelList = (props: AutoCompleteListProps) => {
  return (
    <>
      {props.data?.length ? (
        props.data.map((item, index) => (
          <div className="bg-gray-300 w-1/6 m-1" key={index}>
            {item.searchable}
            <span
              className="cursor-pointer mx-2"
              onClick={() => props.onClick(item, index)}
            >
              X
            </span>
          </div>
        ))
      ) : (
        <div className="mx-2">Select a value</div>
      )}
    </>
  );
};

export { AutoCompleteLabelList };
