const { ThemeBuilder, Theme } = require('tailwindcss-theming')

const COLORS = {
  BLACK: '#000000',
  ALMOST_BLACK: '#343840',
  GREY_1000: '#4e5158',
  GREY_900: '#272a30',
  GREY_800: '#393E46',
  GREY_700: '#2A2E35',
  GREY_600: '#32353D',
  GREY_500: '#7D7D7F',
  GREY_400: '#2D3138',
  GREY_300: '#BABAC2',
  GREY_200: '#E5E5E5',
  GREY_100: '#95959A',
  WHITE: '#FFFFFF',
  ALMOST_WHITE: '#DCDCE2',
  GREEN: '#20CE70',
  DARK_GREEN: '#293e3b',
  LIGHT_GREEN: '#48CF7E'
}

const darkTheme = new Theme()
  .name('dark')
  .default()
  .assignable()
  .colors({
    almost_white: COLORS.ALMOST_WHITE,
    almost_black: COLORS.ALMOST_BLACK,
    gray1000: COLORS.GREY_1000,
    gray900: COLORS.GREY_900,
    gray800: COLORS.GREY_800,
    gray700: COLORS.GREY_700,
    gray600: COLORS.GREY_600,
    gray500: COLORS.GREY_500,
    gray400: COLORS.GREY_400,
    gray300: COLORS.GREY_300,
    gray200: COLORS.GREY_200,
    gray100: COLORS.GREY_100,
    green: COLORS.GREEN,
    dark_green: COLORS.DARK_GREEN,
    light_green: COLORS.LIGHT_GREEN
  })

const lightTheme = new Theme()
  .name('light')
  .assignable()
  .colors({})

module.exports = new ThemeBuilder()
  .hexadecimal()
  .asDataThemeAttribute()
  .default(darkTheme)
  .theme(lightTheme)
