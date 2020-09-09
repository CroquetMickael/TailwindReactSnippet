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
          <>
            <div className="w-1/6 p-1 my-1 ml-1 bg-gray-300" key={index}>
              {item.searchable}
            </div>
            <button
              className="p-1 my-1 mr-1 bg-red-400 cursor-pointer hover:bg-red-600"
              onClick={() => props.onClick(item, index)}
              key={`button_${index}`}
            >
              X
            </button>
          </>
        ))
      ) : (
        <div className="mx-2">Select a value</div>
      )}
    </>
  );
};

export { AutoCompleteLabelList };
