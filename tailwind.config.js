/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#000080",
        brandGreen: "#50C878",
        brandGreenLighter: "#50CE78",
        brandLightPurple: "#CCCCE5",
        textGray: "#808080",
        brandBlack: "#23282B",
      },
      boxShadow: {
        card: "-8px 0px 20px 0px rgba(0, 0, 0, 0.07), 8px 8px 20px 0px rgba(0, 0, 0, 0.07);",
      },
      backgroundImage: {
        services1: "url('/src/Components/Assets/Images/ourServices_bg1.png')",
        services2:
          "url('/src/Components/Assets/Images/ourServices_bg2.png'), linear-gradient(114.86deg, #2D0936 14.71%, #170312 78.23%)",
        overlay_services2:
          "url('/src/Components/Assets/Images/ourServices_overlay.png')",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      openSans: ["'Open Sans'", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
    },
    // screens: {
    //   md: "800px",
    //   // => @media (min-width: 992px) { ... }
    // },
  },
  plugins: [],
};
