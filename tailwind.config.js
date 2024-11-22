/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000'
    },
    screens: {
      DEFAULT: '100%',
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "xxl": "1400px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "400px",
        "sm": "540px",
        "md": "720px",
        "lg": "960px",
        "xl": "1140px",
        "xxl": "1320px",
      }
    },
    extend: {},
  },
  plugins: [],
}

