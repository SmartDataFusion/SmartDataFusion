
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        sdf: {
          bg: '#050A14',
          surface: '#0A1628',
          border: '#0F2035',
          cyan: '#00C8FF',
          violet: '#7B2FFF',
          red: '#FF4C4C',
          green: '#00FF9C',
          text: '#E8F4FF',
          muted: '#4A6B8A'
        }
      },
      fontFamily: {
        heading: ['"Chakra Petch"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        ui: ['"Syne"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
