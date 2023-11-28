/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        "drop-fade-out": {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(200%)', opacity: '0' },
        },
        "focus-in-contract-bck": {
          "0%": { "letter-spacing": "1em", transform: "translateZ(300px)", filter: "blur(12px)", opacity: "0"},
          to: { transform: "translateZ(12px)", filter: "blur(0)", opacity: "1" }
        },
        "focus-in-expand-fwd": {
          "0%": { "letter-spacing": "-.5em", transform: "translateZ(-800px)", filter: "blur(12px)", opacity: "0"},
          to: { transform: "translateZ(0)", filter: "blur(0)", opacity: "1"}
        },
        "blur-out-contract-bck": {
          "0%": { transform: "translateZ(0)", filter: "blur(.01)"},
          to: { "letter-spacing": "-.5em", transform: "translateZ(-500px)", filter: "blur(12px) opacity(0%)"}
        },
      },
      animation: {
        "drop-fade-out": 'drop-fade-out 3s infinite',
        "focus-in-contract-bck": "focus-in-contract-bck 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both",
        "focus-in-expand-fwd": "focus-in-expand-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s both",
        "blur-out-contract-bck": "blur-out-contract-bck 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
      },
    },
  },
  plugins: [],
}
