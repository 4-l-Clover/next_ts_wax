module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        17: '17px'
      },
      height: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        9: '2.25rem',
        11: '2.75rem',
        12.5: '3.125rem',
        18: '4.375rem',
        55: '13.75rem',
        300: '75rem'
      },
      width: {
        272: '68rem',
        160: '40rem',
        110: '27.5rem',
        70: '17.5rem',
        80: '20rem',
        45: '11.25rem',
        46.5: '11.625rem',
        34: '8.75rem',
        30: '7.5rem',
        9: '2.25rem',
        4.5: '1.125rem'
      },
      minWidth: {
        8: '2rem'
      },
      margin: {
        18: '4.375rem'
      },
      body: ['"Poppins"'],
      display: ['Poppins'],
      fontFamily: {
        poppins: 'Poppins'
      },
      colors: {}
    },
    screens: {
      'max-3xl': { max: '1920px' },
      // => @media (max-width: 1920px) { ... }

      'max-2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      'max-xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      'max-lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      'max-md': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'max-sm': { max: '639px' }
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {},
  plugins: [require('./theme.config')]
}
