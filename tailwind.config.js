/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "Lora, serif",
        inter: "Inter, sans-serif",
      },
      colors: {
        primary: "#1B4965",
        secondary: "#CAE9FF",
        font: "#111111",
      },
      backgroundImage: {
        grad: "linear-gradient(to top, #cae9ff,#cae9ffa1), url(./public/auth.jpg)",
      },
    },
  },
  plugins: [],
};
