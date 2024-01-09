/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#146EB4",
        },
        black: {
          12: "#1A181E",
          14: "#4D4D4D",
          30: "#4D4D4D",
          50: "#808080",
          60: "#999999",
          85: "#D9D9D9",
          90: "#E6E6E6",
          95: "#F2F2F2",
        },
        secondary: {
          navbar: "#1E2640",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
