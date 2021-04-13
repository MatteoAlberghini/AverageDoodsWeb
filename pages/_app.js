/*
 * SECTION Entry point for app to start
 */
// Chakra UI
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// React
import React from 'react'
// Next
import Router from 'next/router'
// Constants
import { colors } from '../src/constants/colors'
import { fonts } from '../src/constants/fonts'
// Prop types
import PropTypes from 'prop-types'
// Translation
// import { appWithTranslation } from 'next-i18next'
// Global CSS
import '../styles/globals.css'
// NS Progress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// Themes
import { themes } from '../src/constants/theme'
import ThemeContext from '../src/constants/theme'
// Cookies
import Cookies from 'js-cookie'

// SECTION File constants
const chakraTheme = extendTheme({ colors, fonts })

// SECTION Binding events for NProgress
NProgress.configure({
  showSpinner: false,
})
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// SECTION Main class
function MyApp({ Component, pageProps }) {
  // ANCHOR Constants
  // State
  const [currentTheme, setCurrentTheme] = React.useState(Cookies.get('theme') ? Cookies.get('theme') : themes.colorful)

  // ANCHOR Functions
  // Change current theme
  const changeCurrentTheme = (t) => {
    Cookies.set('theme', t)
    setCurrentTheme(t)
  }
  // Context with use memo
  const themeContext = React.useMemo(() => {
    return {
      currentTheme,
      changeCurrentTheme,
    }
  }, [currentTheme])

  // ANCHOR Return statement
  return (
    <ChakraProvider theme={chakraTheme}>
      <ThemeContext.Provider value={themeContext}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ChakraProvider>
  )
}

// SECTION Translation
MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
}
export default MyApp
// export default appWithTranslation(MyApp)
