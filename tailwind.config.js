/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "moderate-violet": "hsl(263, 55%, 52%)",
        "dark-grey-blue": "hsl(217, 19%, 35%)",
        "dark-black-blue": "hsl(219, 29%, 14%)",
        "light-grey": "hsl(0, 0%, 81%)",
        "gray-blue": "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
