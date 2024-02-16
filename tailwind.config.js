/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Balsamiq: ["Balsamiq Sans, sans-serif"],
        Chewy: ["Chewy, system-ui"],
      },
      backgroundImage: {
        instagram: [
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        ],
      },
      animation: {
        movebike2: "heroheart 30s linear  infinite",
        movebike1: "heroheart2 30s linear  infinite",
        bounce2: "bounce2 5s linear infinite",
        backtoTop: "backtoTop 3s linear infinite",
        proloader: "preloaderone 0.5s 550ms infinite linear   ",
        proloader1: "preloaderone 0.5s 750ms infinite linear   ",
        proloader2: "preloaderone 0.5s 950ms infinite linear   ",
        proloader3: "preloaderone 0.5s 1050ms infinite linear   ",
      },
      keyframes: {
        bounce2: {
          "0%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-10%)" },
        },
        heroheart: {
          "0%": { transform: "translateX(0) rotate3d(1, 1, 1, 0deg)" },
          "100%": { transform: "translateX(-60vw) rotate3d(1, 1, 1, 30deg)" },
        },
        heroheart2: {
          "0%": { transform: "translateX(0)  " },
          "100%": { transform: "translateX(328px) " },
        },

        preloaderone: {
          "100%": { transform: " translateY(-25%)" },
        },
        backtoTop: {
          "0%": {
            transform: "translatey(0) scale(.998)",
          },

          "50%": {
            transform: " translatey(-7px) scale(1.1023)",
          },
          "100%": {
            transform: "translatey(0) scale(.998)",
          },
        },
      },
    },
  },
  plugins: [],
};
