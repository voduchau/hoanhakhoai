import {
  faHouseChimney,
  faGauge,
  faFileLines,
  faCartShopping,
  faUser,
  faCakeCandles,
  faWineGlassEmpty,
  faFan,
  faGift,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

export const LOCATIONS = [
  { label: "Tp. Ho Chi Minh", value: "hcm" },
  { label: "Tp. Buon Ma Thuot", value: "daklak" },
  { label: "Tp. Bao Loc", value: "lamdong" },
  { label: "Ha Noi", value: "hanoi" },
  { label: "Nha Trang", value: "nhatrang" },
];

export const CATEGORYS = [
  { label: "Tất cả sản phẩm", value: "all" },
  { label: "Ngày sinh nhật", value: "birthday" },
  { label: "Chủ đề", value: "topic" },
  { label: "Loại hoa", value: "flower-category" },
  { label: "Loại sản phẩm", value: "product-category" },
  { label: "Sản phẩm khác", value: "other" },
];

export const CART_ITEMS = [
  {
    id: 1,
    image:
      "https://assets.flowerstore.vn/uploads/products/photos/omoyRrEHu3y891wNidg9WTfto7v2cVXAJZonzhhQ.jpeg",
    name: "Cool Breeze",
    quantity: 1,
    price: 249000,
  },
  {
    id: 2,
    image:
      "https://assets.flowerstore.vn/uploads/products/photos/E6ajoswS1ATxMexIXPa9gmI5gdlZM2riqYeZJKSb.jpeg",
    name: "Bong bóng trái tim",
    quantity: 1,
    price: 120000,
  },
];

export const USER_IMAGE = "https://www.engazcrm.com/uploads/images/default.png";

export const USER_MENUS = [
  {
    name: "Trang chủ",
    icon: faHouseChimney,
  },
  {
    name: "Bảng điều khiển",
    icon: faGauge,
  },
  {
    name: "Lịch sử mua hàng",
    icon: faFileLines,
  },
  {
    name: "Giỏ hàng",
    icon: faCartShopping,
    cart: true,
  },
  {
    name: "Quản lý thông tin cá nhân",
    icon: faUser,
  },
];

export const SELLER_MENUS = [
  {
    name: "Ngày sinh nhật",
    icon: faCakeCandles,
  },
  {
    name: "Chủ đề",
    icon: faWineGlassEmpty,
  },
  {
    name: "Loại hoa",
    icon: faFan,
  },
  {
    name: "Loại sản phẩm",
    icon: faGift,
  },
  {
    name: "Sản phẩm khác",
    icon: faEllipsis,
  },
];
