import React, { useState, useRef } from "react";
import { useSearch } from "../../Common/Hooks/Searchable";

const AutocompleteSelect = (props) => {
  const [searchValue, setSearchValue] = useState(null);
  const [index, setIndex] = useState(0);
  const autocompleteRef = useRef(null);
  const { filteredData } = useSearch(
    searchValue,
    props.items,
    props.searchInput?.props.searchableValue || []
  );

  const KeyboardEvent = (event) => {
    const mouseOverEvent = new Event("mouseoverw", {
      bubbles: true,
    });
    const autocompleteDiv = autocompleteRef.current;
    if (autocompleteDiv !== null) {
      const Options = autocompleteDiv.getElementsByTagName("p");
      // prevent state not updating as fast as necessery
      let internalindex = index;
      switch (event.keyCode) {
        case 40: //Keydown
          event.preventDefault();
          if (internalindex !== Options.length - 1) {
            setIndex(internalindex + 1);
            internalindex = internalindex + 1;
          }
          if (
            internalindex !== 0 &&
            Options.item(internalindex - 1).classList.contains(
              props.activeClass
            )
          ) {
            Options.item(internalindex - 1).classList.toggle(props.activeClass);
          }
          if (
            Options.item(internalindex).classList.contains(props.activeClass) ==
            false
          ) {
            Options.item(internalindex).classList.toggle(props.activeClass);
          }
          Options.item(internalindex).dispatchEvent(mouseOverEvent);
          break;
        case 38: //Keyup
          event.preventDefault();
          if (internalindex !== 0) {
            setIndex(internalindex - 1);
            internalindex = internalindex - 1;
          }
          if (
            Options.item(internalindex + 1).classList.contains(
              props.activeClass
            )
          ) {
            Options.item(internalindex + 1).classList.toggle(props.activeClass);
          }
          if (
            Options.item(internalindex).classList.contains(props.activeClass) ==
            false
          ) {
            Options.item(internalindex).classList.toggle(props.activeClass);
          }
          Options.item(internalindex).dispatchEvent(mouseOverEvent);
          break;
        case 13: //enter
          Options.item(index).click();
          setIndex(0);
          break;
        default:
          if (
            internalindex === 0 &&
            Options.item(internalindex).classList.contains(
              props.activeClass
            ) === false
          ) {
            Options.item(internalindex).classList.toggle(props.activeClass);
          }
          break;
      }
    } else {
      return;
    }
  };

  return (
    <>
      <div className={props.class}>
        {props.label !== undefined
          ? React.cloneElement(props.label, {
              data: props.selectedItems,
              setSearchable: setSearchValue,
            })
          : null}
        {React.cloneElement(props.searchInput, {
          onChange: (e) => {
            setSearchValue(e.target.value);
          },

          onKeyDown: KeyboardEvent,
          value: searchValue,
          onClick: () => {
            setSearchValue("");
          },
        })}
      </div>
      {React.cloneElement(props.listComponent, {
        data: filteredData(true),
        setSearchable: setSearchValue,
        ref: autocompleteRef,
      })}
    </>
  );
};

export { AutocompleteSelect };
