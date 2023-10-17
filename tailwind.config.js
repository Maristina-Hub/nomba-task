/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: "#FFCC00",
        red: "red",
        green: "green",
        secondary: {
          100: "#fffae6",
          200: "#888883",
        },
      }),
    },
    clipPath: {
      imgpolygon: "polygon(0px 0px, 100% 0%, 100% 61%, 0px 100%, 0% 50%)",
    },
    transformOrigin: {
      transform: 'translate3d(0px, 0px, 0px)'
    },
  },
  plugins: [require("tailwind-clip-path")],
};
