export const theme = {
  colors: {
    primaryFont: "#121417", //--text-color-100: #121417;
    secondaryFont: "#FFFFFF",
    accentNormalColor: "#f4c550", //  --accent-normal-color: #f4c550;
    accentSecondColor: "#fbe9ba", //  --accent-second-color: #fbe9ba;
    accentThirdColor: "#d3933b", // --accent-third-color: #d3933b;
    orange: "#FFB627",
    pink: "#FF868D",
    violet: "#734AEF",
    white: "rgba(255, 255, 255, 0.40)",
    secondBackground: "#f8f8f8", // --second-background: #f8f8f8;
    btnGradient:
      "linear-gradient(167deg, #FFC727 0%, #9E40BA 61.46%, #7000FF 90.54%)",
    btnWhiteBg: "#FCFCFC",
    btnVioletText: "#623F8B",
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  spacing: (value) => `${4 * value}px`,

  fonts: {
    regular400: "Roboto400, sans-serif",
    regularItalic400: "RobotoItalic400, sans-serif",
    semiBold500: "Roboto500, sans-serif",
    bold700: "Roboto700, sans-serif",
  },

  fontSizes: {
    s12: "12px",
    s14: "14px",
    s16: "16px",
    s18: "18px",
    s20: "20px",
    s28: "28px",
    s48: "48px",
  },

  fontWeights: {
    regular: 400,
    semiBold: 500,
    bold: 700,
  },

  lineHeights: {
    normal: 1.2,
    upperCase: 1.8,
  },

  radius: {
    none: "0",
    normal: "8px",
    button: "12px",
    wrapper: "30px",
    round: "50%",
  },

  borders: {
    none: "none",
    normal: "1px solid",
    medium: "3px solid ",
  },

  shadows: {
    primary: "0px 4px 60px 0px rgba(0, 0, 0, 0.25)",
    secondary: "1px 9px 15px 0px rgba(0, 0, 0, 0.20)",
    header:
      "0px 4px 40px 0px rgba(0, 0, 0, 0.25), 0px -3px 2px 0px rgba(0, 0, 0, 0.10) inset",
  },

  transitions: {
    regular: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
    color: "transform ease-in-out 250ms",
  },
};
