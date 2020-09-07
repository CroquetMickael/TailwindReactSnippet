import React from "react";

interface AutoCompleteListProps {
  data?: any[];
  onClick: (item: any) => void;
}
const AutoCompleteList = (props: AutoCompleteListProps) => {
  return (
    <>
      {props.data?.length ? (
        <div className="bg-white border border-gray-700">
          {props.data?.map((item: any, index: number) =>
            item.selected === true ? (
              <p
                className="bg-white border-b border-gray-400 text-gray-400 p-2"
                key={index}
              >
                {item.searchable}
              </p>
            ) : (
              <p
                className="bg-white hover:bg-gray-400 border-b border-gray-400 p-2 cursor-pointer"
                onClick={() => props.onClick(item)}
                key={index}
              >
                {item.searchable}
              </p>
            )
          )}
        </div>
      ) : null}
    </>
  );
};

export { AutoCompleteList };
