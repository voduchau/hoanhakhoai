import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import ModalCategory from "../modalCategory/index.js";
import {CATEGORYS} from "../../../../constant/index.js";
import "./styles.css";

const SearchBox = ({
  categoryRef,
  openCategory,
  setOpenCategory,
  searchBoxRef,
}) => {
  const handleClickCategory = (e) => {
    setOpenCategory(!openCategory);
  };
  const handleCloseSearch = () => {
    searchBoxRef.current.classList.remove("input_show");
  };
  return (
    <div className="navbar_wrap_search_bar flex items-center px-1">
      <FontAwesomeIcon
        onClick={handleCloseSearch}
        className="mb_arrow_left_icon sm:hidden"
        icon={faArrowLeftLong}
      />
      <form
        action="https://flowerstore.vn/search"
        className="flex-1"
        method="GET"
      >
        <div className="sm:flex">
          <input
            type="text"
            aria-label="Search"
            className="search-input sm:w-52 absolute sm:relative sm:flex sm:opacity-100 sm:visible sm:border sm:border-solid sm:border-border-input sm:p-0 sm:pl-3.5 sm:ml-0"
            placeholder="Tôi muốn tìm ..."
            autoComplete="off"
          />
          <div
            ref={categoryRef}
            className="category hidden sm:flex items-center"
            onClick={handleClickCategory}
          >
            <select
              className="category-select select-hidden-accessible"
              name="category"
              tabIndex="-1"
              aria-hidden="true"
              data-select2-id="41"
            >
              {CATEGORYS.map((category, index) => (
                <option key={index} value={category.value} data-select2-id="43">
                  {category.value}
                </option>
              ))}
            </select>
            <span className="select-container" dir="ltr">
              <span
                className="select-selection__rendered"
                role="textbox"
                aria-readonly="true"
                title="Tất cả sản phẩm"
              >
                Tất cả sản phẩm
              </span>
            </span>
            <ModalCategory
              openCategory={openCategory}
              setOpenCategory={setOpenCategory}
              categoryRef={categoryRef}
            />
          </div>
          <button
            className="bg-primary btn-search hidden sm:block"
            type="submit"
            disabled="disabled"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
