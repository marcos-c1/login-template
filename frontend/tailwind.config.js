/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stroke: "#D4D7E3",
        btnSign: "#162D3A",
        bkgInput: "#F3F9FA",
        line: "#CFDFE2",
        link: "#1E4AE9",
        small: "#959CB6",
        shadowInput: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      },
    },
  },
  plugins: [],
}

