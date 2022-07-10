/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F79F8E",
        "border-input": "#cbcbcb",
        "side-menu": "#5a5a5a",
      },
      backgroundImage: {
        USER_IMAGE:
          "url('https://www.engazcrm.com/uploads/images/default.png')",
      },
      width: {
        '1200': '1200px',
      }
    },
  },
  plugins: [],
};
