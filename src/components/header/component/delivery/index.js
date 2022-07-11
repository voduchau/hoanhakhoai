import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { LOCATIONS } from "../../../../constant/index.js";
import "./styles.css";

const HeaderDelivery = () => {
  return (
    <div className="navbar_wrap_deliver flex justify-between">
      <div className="navbar_wrap_deliver_marker self-center">
        <FontAwesomeIcon className="pr-2" icon={faLocationDot} />
        <label className="font-bold pr-2" htmlFor="deliver_to">
          <span>Gửi đến</span>
        </label>
      </div>
      <div className="navbar_wrap_devliver--location">
        <select
          id="deliver_to"
          className="text-right border-0 xl:h-10 xl:border xl:border-solid xl:border-border-input xl:text-left"
        >
          {LOCATIONS.map((location) => (
            <option key={location.value} value={location.value}>
              {location.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HeaderDelivery;
