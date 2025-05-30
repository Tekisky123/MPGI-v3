/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mpgin: {
          blue: "#83c8f2",
          darkBlue: "#111827",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        bounceHover: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        bounceHover: "bounceHover 0.5s ease",
      },
    },
  },
  plugins: [],
};
