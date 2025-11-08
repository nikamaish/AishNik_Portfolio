/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b15",
        primary: "#8b5cf6",   
        accent: "#06b6d4",    
        secondary: "#9333ea", 
        textLight: "#f1f5f9", 
      },
    },
  },
  plugins: [],
};
