/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F79F8E",
        "border-input": "#cbcbcb",
        "side-menu": "#5a5a5a",
        "top-navbar": "#f8f8f8",
        link: "#333333",
        "banner-cat": "#818a91",
        "section-banner": "#fcf9f7",
        "#888888": "#888888"
      },
      backgroundImage: {
        USER_IMAGE:
          "url('https://www.engazcrm.com/uploads/images/default.png')",
      },
      width: {
        30: "30px",
        1200: "1200px",
        938: "938px",
      },
      height: {
        30: "30px",
      },
      maxWidth: {
        176: "176px",
        740: "740px",
        1200: "1200px",
      },
      margin: {
        10: "10px",
      },
      padding: {
        10: "10px",
      },
      fontSize: {
        10: "10px",
        13: "13px",
        17: "17px",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [],
};
