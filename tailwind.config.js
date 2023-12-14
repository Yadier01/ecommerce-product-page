/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "trans-right": {
          "0%, 100%": { tranform: "translateX(10px" },
        },
      },
    },
  },
  safelist: [
    "animate-[fade-in-left_1s_ease-in-out]",
    "animate-[fade-in-down_1s_ease-in-out]",
  ],
  plugins: [],
};
