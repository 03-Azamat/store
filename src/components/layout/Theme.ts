import { extendTheme } from "@chakra-ui/react";

// example theme
export const theme = extendTheme({
  colors: {
    blue: "#0095da",
    blueDark: "#0473a7",
    darkMain: "#27374D",
    transparent: "transparent",
  },
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "24px",
    "2xl": "28px",
    "3xl": "32px",
    "4xl": "40px",
    "5xl": "58px",
    "6xl": "78px",
  },
  fontFamily: {
    inter: "Inter, sans-serif",
    roboto: "Roboto, sans-serif",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
});
