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
            <div className="bg-gray-300 w-1/6 my-1 ml-1 p-1" key={index}>
              {item.searchable}
            </div>
            <button
              className="cursor-pointer p-1 my-1 mr-1 bg-red-400 hover:bg-red-600"
              onClick={() => props.onClick(item, index)}
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
