/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        "main": {
          "50": "#E6EFFE",
          "100": "#CDE0FE",
          "200": "#96BDFD",
          "300": "#649EFC",
          "400": "#2D7CFB",
          "500": "#055FF0",
          "600": "#044BBE",
          "700": "#033991",
          "800": "#02265F",
          "900": "#011432"
        },
        "secondary": {
          "50": "#FFECE5",
          "100": "#FFDACC",
          "200": "#FFB89E",
          "300": "#FF936B",
          "400": "#FF713D",
          "500": "#FF4B0A",
          "600": "#D63900",
          "700": "#9E2A00",
          "800": "#6B1D00",
          "900": "#330E00"
        },
        "gray": {
          "50": "#E8E7E9",
          "100": "#CFCCD1",
          "200": "#A19BA6",
          "300": "#706A76",
          "400": "#423F46",
          "500": "#121113",
          "600": "#0F0E10",
          "700": "#0A0A0B",
          "800": "#080708",
          "900": "#030203"
        },

        "white": "#FFFFFA",
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
