const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cta': 'linear-gradient(to left, #0200434d, #020043), url("https://i.ibb.co/nDkSTTq/Rectangle-32.png")',
       'banner': 'linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%), url("https://i.ibb.co/RYnb9Dx/Rectangle-5.png")'

      },
    },
  },
  plugins: [nextui()],
};
