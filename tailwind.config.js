// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./contact/**/*.{js,ts,jsx,tsx,mdx}",
    "./login/**/*.{js,ts,jsx,tsx,mdx}",
    "./about/**/*.{js,ts,jsx,tsx,mdx}",
    "./politicians/**/*.{js,ts,jsx,tsx,mdx}",
    "./politicians/portfolio/**/*.{js,ts,jsx,tsx,mdx}",
    "./signup/**/*.{js,ts,jsx,tsx,mdx}",
    "./maintenance/**/*.{js,ts,jsx,tsx,mdx}",
    "./forgot-password/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Space Grotesk"', 'serif'],
        secondary: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
