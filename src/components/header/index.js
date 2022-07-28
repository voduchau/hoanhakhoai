import React, { useState, useRef } from "react";
import SearchBox from "./component/searchBox/index.js";
import HeaderDelivery from "./component/delivery/index.js";
import HeaderLogo from "./component/logo/index.js";
import GroupCartHeader from "./component/cartGroup/index.js";
import TopNavBar from "./component/topNavbar/index.js";
import SideMenu from "../mobile/header/sideMenu/index.js";
import IconSearchMobile from "../mobile/header/iconSearch/index.js";
import "./index.css";

const Header = () => {
  const categoryRef = useRef(null);
  const searchBoxRef = useRef(null);
  const [openCategory, setOpenCategory] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const handleClickSearchMobile = () => {
    searchBoxRef.current.classList.add("input_show");
  };
  const toggleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <>
      <TopNavBar />
      <div
        className="navbar_wrap items-center justify-center sm:self-center xl:shadow-none xl:w-full xl:py-5 sm:relative xl:flex"
        id="header"
      >
        <SideMenu
          openSideMenu={openSideMenu}
          setOpenSideMenu={setOpenSideMenu}
        />
        <HeaderLogo toggleSideMenu={toggleSideMenu} />
        <HeaderDelivery />
        <div ref={searchBoxRef} className="search_box_mobile_group">
          <SearchBox
            categoryRef={categoryRef}
            openCategory={openCategory}
            searchBoxRef={searchBoxRef}
            setOpenCategory={setOpenCategory}
          />
        </div>
        <div className="flex absolute right-0 top-6 xl:relative xl:top-0">
          <IconSearchMobile handleClickSearchMobile={handleClickSearchMobile} />
          <GroupCartHeader openCategory={openCategory} />
        </div>
      </div>
    </>
  );
};

export default Header;
