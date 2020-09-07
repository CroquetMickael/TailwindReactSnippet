import React from "react";

const AutoCompleteList = (props) => {
  const onClick = (item) => {
    props.onClick(item);
    props.setSearchable("");
  };
  return (
    <div className="bg-white border border-gray-700">
      {props.data.map((item, index) =>
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
            onClick={() => onClick(item)}
            key={index}
          >
            {item.searchable}
          </p>
        )
      )}
    </div>
  );
};

export { AutoCompleteList };
