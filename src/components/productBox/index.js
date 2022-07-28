import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const ProductBox = ({product}) => {
  return (
    <div className={`flex ${product.flashSale ? "flex-row" : "flex-col"} justify-center product-box-2 border border-[#eeeeee] bg-white relative xl:flex-col xl:hover:-translate-y-1 xl:hover:shadow-md transition-all duration-300 hover:cursor-pointer`}>
      <div className={`${product.flashSale ? "max-w-[50%] border-r" : "max-w-full"} border-[#dee2e6] xl:border-0 xl:max-w-full`}>
        <img
          className="w-full h-full max-w-full"
          src={product.img}
        />
      </div>
      <div className="p-2 xl:border-t xl:border-[#dee2e6] flex flex-1 items-center xl:p-4">
        <div className="flex flex-col w-full">
          <div className="grow-1">
            <div className="flex">
              <h2 className="font-bold p-0 text-13 h-10 leading-[1.6] xl:mb-2">{product.name}</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="grow price-box flex flex-col">
              {/* <span className="xl:hidden product-price font-semibold inline pr-2">
                249,000 ₫{" "}
              </span> */}
              <span>
                <del className="old-product-price strong-400 text-#888888 text-sm mr-1.5">
                  {product.oldPrice}{" "}
                </del>
              </span>
              <div className="text-[#F79F8E] text-[16px] font-semibold xl:block product-price strong-600">
                {product.currentPrice}{" "}
              </div>
            </div>
            <div
              className="add-to-cart btn flex items-center justify-center cursor-pointer border border-primary w-30 h-30 self-end"
              title="Xem nhanh"
            >
              <FontAwesomeIcon
                className="text-13 text-primary"
                icon={faCartShopping}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
