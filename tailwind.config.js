/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
     colors:{
      textColor:"#9C27B0",
      reactColor:"#3998B6",
      secondText:"#6B7688",
      backgroundFirst:"#edf2f8",
      backgroundSecond:"#FFFFFF",
      hoverBackgroundColor:"#9C27B0"
     }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            textColor:"#9C27B0",
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "vibrant-light": {
          colors: {
            background: "#F5F5F5",
            foreground: "#333333",
            primary: {
              50: "#F0F6FF",
              100: "#C3DAFE",
              200: "#A3BFFA",
              300: "#7F9CF5",
              400: "#667EEA",
              500: "#5A67D8",
              600: "#4C51BF",
              700: "#434190",
              800: "#3C366B",
              900: "#312E3C",
              DEFAULT: "#5A67D8",
              foreground: "#333333",
            },
            secondary:{800: "#3C362c",
            900: "#312E2b"},
            focus: "#4C51BF",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
}
