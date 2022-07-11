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
        className="mb_arrow_left_icon top-0 sm:top-3 xl:hidden"
        icon={faArrowLeftLong}
      />
      <form
        action="https://flowerstore.vn/search"
        className="flex-1"
        method="GET"
      >
        <div className="xl:flex">
          <input
            type="text"
            aria-label="Search"
            className="search-input absolute top-0 sm:top-3 xl:top-0 xl:flex xl:w-52 xl:relative xl:opacity-100 xl:visible xl:border xl:border-solid xl:border-border-input xl:p-0 xl:pl-3.5 xl:ml-0"
            placeholder="Tôi muốn tìm ..."
            autoComplete="off"
          />
          <div
            ref={categoryRef}
            className="category hidden sm:hidden items-center xl:flex"
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
            className="bg-primary btn-search hidden xl:block"
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
