import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SELLER_MENUS } from "../../../../../../../../constant/index.js";
import "./styles.css";

const SellerMenu = () => {
  return (
    <ul className="side-seller-menu">
      {SELLER_MENUS.map((menu, index) => (
        <li key={index}>
          <a
            href="https://flowerstore.vn/categories/Birthdays"
            className="text-truncate"
          >
            <FontAwesomeIcon className="opacity-60 mr-2 text-xl w-5" icon={menu.icon} />
            <span>{menu.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SellerMenu;
