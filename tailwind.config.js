/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Animations
      animation: {
        "gradient-background": "gradientBackground 10s ease infinite", // Slow gradient animation
        float: "float 3s ease-in-out infinite", // Floating animation
        spinner: "spin 1s linear infinite", // Spinning animation
        "spin-slow": "spin 3s linear infinite", // Slow spinning animation
      },
      // Keyframes
      keyframes: {
        gradientBackground: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-20px)" }, // Floating up and down
          "50%": { transform: "translateY(20px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" }, // Spinning
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
