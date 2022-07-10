import React from "react";
import SideMenuHeader from "./component/header/index.js";
import SideMenuList from "./component/list/index.js";
import "./styles.css";

const SideMenu = ({ openSideMenu, setOpenSideMenu }) => {
  const handleCloseSideMenu = () => {
    setOpenSideMenu(false);
  };
  return (
    <div
      className={`side-menu-wrap${openSideMenu ? " opacity-1" : " opacity-0"}`}
    >
      <div className={`side-menu${openSideMenu ? " open" : " closed"}`}>
        <SideMenuHeader handleCloseSideMenu={handleCloseSideMenu} />
        <SideMenuList />
      </div>
    </div>
  );
};

export default SideMenu;
