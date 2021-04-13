/* SECTION Theme & theme context */
// Imports
import React from 'react'

// Themes
export const themes = {
  colorful: {
    name: 'colorful',
    dark: '#06001c',
    primary: '#2848ad',
    secondary: '#480094',
    third: '#43b2f7',
    fourth: '#ffdee9',
    fifth: '#ff72c1',
    white: '#ffffff',
    grey: '#8F9491',
  },
  another: {
    name: 'another',
    dark: '#1E1E1E',
    primary: '#F27D92',
    secondary: '#55BDCA',
    third: '#96FFFF',
    fourth: '#C8EFF9',
    white: '#ffffff',
  },
}

// Context
const ThemeContext = React.createContext()

// Export provider & consumer
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer

// Export entire context
export default ThemeContext
