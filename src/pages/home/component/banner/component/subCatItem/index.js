import React from "react";
import "./styles.css";

const SubCatItem = ({cate}) => {
  return (
    <div className="card xl:m-10 xl:inline-block xl:w-full">
      <ul className="sub-cat-items">
        <li>
          <a href="https://flowerstore.vn/subcategory/for-friends" className="leading-5 block text-link text-13">
            <strong className="font-semibold">{cate.label}</strong>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SubCatItem;
