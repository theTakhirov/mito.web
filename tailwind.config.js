module.exports = {
  content: [
      "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    fontFamily: {
      sans: 'Dank Mono',
      mono: 'Dank Mono Italic'
    },
    colors: {
      white: {
        DEFAULT: 'rgb(255, 255, 255)',
        600: 'rgba(255, 255, 255, 0.6)'
      },
      dark: {
        DEFAULT: 'rgb(34, 32, 32)'
      },
      blue: {
        light: 'rgb(173, 216, 230)'
      },
      pink: {
        DEFAULT: 'rgb(255, 192, 203)'
      }
    },
    extend: {},
  },
  plugins: [],
}
