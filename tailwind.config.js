module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "0px",
      "xs-mid": "320px",
      sm: "640px",
      "sm-mid": "704px",
      md: "768px",
      "md-mid": "832px",
      "md-lg": "896px",
      lg: "1024px",
      "lg-mid": "1088px",
      "lg-xl": "1152px",
      xl: "1280px",
      "xl-mid": "1408px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Alice: ["Alice", "serif"],
        mateSc: ["Mate SC", "serif"],
        mate: ["Mate", "serif"],
        GowunBatang: ["Gowun Batang", "system-ui"],
        Simonetta: ["Simonetta", "serif"],
        FbWall: ["FBWallW W34 Regular"],
        EB_Garamond: ["EB Garamond", "serif"],
        Crimson_Pro: ["Crimson Pro", "serif"],
      },
    },
  },
  plugins: [],
  safelist: [
    // Gradient directions
    "bg-gradient-to-t",
    "bg-gradient-to-tr",
    "bg-gradient-to-r",
    "bg-gradient-to-br",
    "bg-gradient-to-b",
    "bg-gradient-to-bl",
    "bg-gradient-to-l",
    "bg-gradient-to-tl",
  
    // Specific black, white, and transparent stops (no shades)
    "from-black",
    "via-black",
    "to-black",
    "from-white",
    "via-white",
    "to-white",
    "from-transparent",
    "via-transparent",
    "to-transparent",
  
    // Background colors for all available color shades
    {
      pattern: /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
  
    // Gradient color stops with shades for all colors (except black/white/transparent)
    {
      pattern: /(from|via|to)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
  ],
  
};
