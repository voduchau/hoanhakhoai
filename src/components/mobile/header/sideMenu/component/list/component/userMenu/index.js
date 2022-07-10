import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { USER_MENUS } from "../../../../../../../../constant/index.js";
import "./styles.css";

const UserMenu = () => {
  return (
    <ul className="side-user-menu">
      {USER_MENUS.map((menu, index) => (
        <li key={index}>
          <a href="#">
            <FontAwesomeIcon icon={menu.icon} />
            <span>{menu.name}</span>
            {menu.cart ? (
              <span className="badge bg-primary inline-flex justify-center items-center" id="cart_items_sidenav">
                0
              </span>
            ) : (
              ""
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UserMenu;
