import React from "react";
import SubCatList from "./component/subCatList";
import SliderBanner from "./component/slider";
import { CATEGORYS } from "../../../../constant";
import "./styles.css";
import FlashSale from "./component/flashSale";

const HomeBanner = () => {
  return (
    <section className="home-banner-area mb-2 bg-section-banner">
      <div className="container flex flex-col px-0 xl:px-[15px] xl:flex-row xl:justify-between xl:max-w-1200">
        <div className="order-2 xl:order-1 position-static xl:grow">
          <div className="category-sidebar py-[15px] xl:py-0 xl:relative xl:bg-white">
            <div className="all-category h-12 pl-4 text-13 flex items-center bg-[#f9f3ef]">
              <span className="font-semibold text-base">Nhóm Sản Phẩm</span>
            </div>
            <ul className="categories flex flex-row xl:flex-col">
              {[...CATEGORYS]
                .filter((_, index) => index != 0)
                .map((item, index) => (
                  <SubCatList key={index} item={item} />
                ))}
            </ul>
          </div>
        </div>
        <SliderBanner />
        <FlashSale />
      </div>
    </section>
  );
};
export default HomeBanner;
