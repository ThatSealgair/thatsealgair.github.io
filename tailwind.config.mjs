import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#C8C093', // white
          secondary: '#727169', // brightBlack
          background: '#181616',
          surface: '#0D0C0C', // black
          overlay: '#223249', // selectionBackground
          muted: '#727169', // brightBlack
          
          accent: {
            DEFAULT: '#957FB8', // purple
            secondary: '#7E9CD8', // blue
            tertiary: '#98BB6C', // green
          },
          
          text: {
            DEFAULT: '#C8C093', // foreground
            muted: '#a6a69c', // brightBlack
            link: '#7FB4CA', // brightBlue
          },
          
          border: {
            DEFAULT: '#a6a69c', // brightBlack
            hover: '#c5c9c5', // brightWhite
          }
        },
        light: {
          primary: '#545464', // foreground
          secondary: '#8A8980', // brightBlack
          background: '#F2ECBC',
          surface: '#1F1F28', // black
          overlay: '#B5CBD2', // selectionBackground
          muted: '#8A8980', // brightBlack
          
          accent: {
            DEFAULT: '#B35B79', // purple
            secondary: '#4D699B', // blue
            tertiary: '#6F894E', // green
          },
          
          text: {
            DEFAULT: '#545464', // foreground
            muted: '#8A8980', // brightBlack
            link: '#6693BF', // brightBlue
          },
          
          border: {
            DEFAULT: '#8A8980', // brightBlack
            hover: '#43436C', // brightWhite
          }
        }
      },
            
      fontFamily: {
        mono: ['"RecMonoLinear Nerd Font"', ...defaultTheme.fontFamily.mono],
        sans: ['"RecMonoLinear Nerd Font"', ...defaultTheme.fontFamily.mono],
        serif: ['"RecMonoLinear Nerd Font"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
