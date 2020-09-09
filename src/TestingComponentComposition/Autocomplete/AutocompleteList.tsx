import React, { KeyboardEvent, forwardRef, RefObject } from "react";

interface AutoCompleteListProps {
  data?: any[];
  onClick: (item: any) => void;
  onKeyDown: (event: KeyboardEvent<HTMLParagraphElement>, item: any) => void;
}
const AutoCompleteList = forwardRef(
  (props: AutoCompleteListProps, ref: any) => {
    return (
      <>
        {props.data?.length ? (
          <div className="bg-white border border-gray-700" ref={ref}>
            {props.data?.map((item: any, index: number) =>
              item.selected === true ? (
                <p
                  className="p-2 text-gray-400 bg-white border-b border-gray-500"
                  key={index}
                >
                  {item.searchable}
                </p>
              ) : (
                <p
                  className="p-2 bg-white border-b border-gray-400 cursor-pointer focus:bg-gray-400 hover:bg-gray-400"
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
  }
);

export { AutoCompleteList };
