import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HomeBanner from "./component/banner";
import Collections from "./component/collections";
import "./styles.css";

const HomePage = () => {
  return (
    <div className="sm:flex-col sm:self-stretch sm:flex justify-center bg-[#f3f3f3]">
      <Header />
      <div className="mt-[120px] xl:mt-0 body-wrap">
        <HomeBanner />
        <Collections />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
