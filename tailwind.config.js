/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
          xs: '100%',
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
      },
  },
    extend: {
      colors:{
        primary:'#6c7fd8',
        secondary:'#3d4750',
        light:"#f8f8fb",
      },
    },
  },
  plugins: [],
};
