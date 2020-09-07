import React from "react";

const AutoCompleteLabelList = (props) => {
  const onClick = (item, index) => {
    props.onClick(item, index);
    props.setSearchable("");
  };
  return (
    <>
      {props.data?.length ? (
        props.data.map((item, index) => (
          <div className="bg-gray-300 w-1/6 m-1" key={index}>
            {item.searchable}
            <span
              className="cursor-pointer mx-2"
              onClick={() => onClick(item, index)}
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
