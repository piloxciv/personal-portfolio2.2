module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'body': '#FFFFFF', /* original: 17171F */
      'selected-text': '#F04A7B', /* original: A3A3FF */
      'selected-circle': '#F04A7B',
      'theme': '#F04A7B',
      'theme-opa': '#ffabbb',
      'strong-blue': '#232669',
      'nav': '#404053',
      'secondary': '#232669',
      'input-border': '#2B3582',
      'input': '#2B3582',
      'badge': '#3F3F51',
    },
    extend: {
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
    fontFamily: {
      'poppins': ["'Poppins'", 'sans-serif']
    }
  },
  plugins: [],
}
