import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCheck } from "@fortawesome/free-solid-svg-icons";
import { CATEGORYS } from "../../../../constant/index.js";
import { useOutsideModal } from "../../../../utils/index.js";
import "./styles.css";

const ModalCategory = ({ openCategory, setOpenCategory, categoryRef }) => {
  const [itemSelected, setItemSelected] = useState(0);
  const [itemHighlighted, setItemHighlighted] = useState(0);
  const containerModalRef = useRef(null);
  const inputRef = useRef(null);
  useOutsideModal({modalRef:containerModalRef, setOpenModal: setOpenCategory, parentRef: categoryRef, exception: inputRef});

  useEffect(() => {
    if (openCategory) {
      containerModalRef.current.style.display = "inline-block";
      inputRef.current.focus();
    } else {
      containerModalRef.current.style.display = "none";
    }
  }, [openCategory]);

  // Prevent close dropdown when click inside dropdown.
  const handleClickDropdown = (e) => {
    e.stopPropagation();
  };

  const handleKeyDown = (event) => {
    const maxItem = CATEGORYS.length - 1;
    const nextItem =
      itemHighlighted < maxItem ? itemHighlighted + 1 : itemHighlighted;
    const preItem = itemHighlighted > 0 ? itemHighlighted - 1 : itemHighlighted;
    switch (event.code) {
      case "ArrowDown":
        setItemHighlighted(nextItem);
        break;
      case "ArrowUp":
        setItemHighlighted(preItem);
      default:
        break;
    }
  };

  const handleMouseMove = (event) => {
    const indexMouseHover = parseInt(event.target.dataset.index);
    setItemHighlighted(indexMouseHover);
  };

  return (
    <span
      onClick={handleClickDropdown}
      ref={containerModalRef}
      className="category-dropdown"
      onKeyDown={handleKeyDown}
    >
      <span className="select-dropdown" dir="ltr">
        <span className="select-dropdown-search flex items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            ref={inputRef}
            className="select-search__field"
            type="search"
            tabIndex="0"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck="false"
            role="searchbox"
            aria-autocomplete="list"
            aria-controls="select-category"
          />
        </span>
        <span className="select-results">
          <ul
            className="select-results__options"
            role="listbox"
            id="select-category"
            aria-expanded="true"
            aria-hidden="false"
          >
            {CATEGORYS.map((category, index) => (
              <li
                className={`select-results__option${
                  index === itemHighlighted || index === itemSelected
                    ? " select-results__option--highlighted"
                    : ""
                }`}
                role="option"
                onMouseMove={handleMouseMove}
                key={category.value}
                aria-selected={index === itemSelected}
                data-index={index}
              >
                {category.label}
                {index === itemSelected ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </span>
      </span>
    </span>
  );
};

export default ModalCategory;
