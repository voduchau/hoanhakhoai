import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SubCatItem from "../subCatItem/index.js";
import "./styles.css";

const SubCatList = ({ item }) => {
  return (
    <li className="border border-[#e9e9e9] grow flex justify-center xl:border-0 xl:justify-start group">
      <a
        href="https://flowerstore.vn/categories/Birthdays"
        className="flex justify-center w-[48px] px-0 xl:px-2.5 py-2 text-banner-cat xl:w-auto"
      >
        <div id="cat_no_campaign" className="flex flex-col items-center text-center xl:flex-row cat-wrap py-1 group">
          {item.icon ? (
            <FontAwesomeIcon
              icon={item.icon}
              className="text-[30px] xl:text-[18px] w-[20px] group-hover:text-[#F79F8E]"
            />
          ) : null}
          <span className="text-[7px] xl:text-[13px] cat-name p-0 mt-[5px] xl:mt-0 xl:pl-1.5 xl:pr-2.5 group-hover:text-[#F79F8E]">{item.label}</span>
          <FontAwesomeIcon icon={faAngleRight} className="hidden xl:flex opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-[#F79F8E]" />
        </div>
      </a>
      <div className="sub-cat-menu h-full hidden xl:group-hover:block xl:z-1000 xl:bg-white xl:absolute xl:border xl:border-zinc-50 xl:border-solid xl:top-0 xl:right-0 xl:translate-x-full xl:w-938">
        <div className="sub-cat-main">
          <div>
            <div className="sub-cat-content">
              <div className="xl:p-10 xl:pt-0">
                <div className="columns-3">
                  {item.items.map((cate, index) => (
                    <SubCatItem key={index} cate={cate} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SubCatList;
