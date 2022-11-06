/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "main": {
          "50": "#FBECE9",
          "100": "#F6D5D0",
          "200": "#EEAEA5",
          "300": "#E68475",
          "400": "#DE5E4A",
          "500": "#CA3C25",
          "600": "#A4301E",
          "700": "#792316",
          "800": "#52180F",
          "900": "#270B07"
        },
        "secondary": {
          "50": "#E4FCFB",
          "100": "#C8F8F8",
          "200": "#96F2F1",
          "300": "#60ECE9",
          "400": "#29E5E2",
          "500": "#17BEBB",
          "600": "#129694",
          "700": "#0E7270",
          "800": "#094D4C",
          "900": "#042424"
        },
        "gray": {
          "50": "#E8E7E9",
          "100": "#D2CFD3",
          "200": "#A7A1AA",
          "300": "#7A727E",
          "400": "#4E4950",
          "500": "#1F1D20",
          "600": "#1A181B",
          "700": "#121113",
          "800": "#0D0C0D",
          "900": "#050505"
        },
        "white": "#FDFFFC",
        "inputBorderColor": 'border-secondary-500',
        "inputRingColor": 'border-secondary-300',
        "labelTextColor": 'text-gray-700'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
