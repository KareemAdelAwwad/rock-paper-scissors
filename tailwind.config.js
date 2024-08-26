/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        dark: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
      },
      colors: {
        header: 'hsl(217, 16%, 45%)',
        dark: 'hsl(229, 25%, 31%)',
        'scissors-gradient': 'linear-gradient(90deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'paper-gradient': 'linear-gradient(90deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'rock-gradient': 'linear-gradient(90deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'radial-gradient': 'radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
      },
    },
  },
  plugins: [],
}