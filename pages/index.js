/*
 * [PAGE] Main page
 */
// SECTION Imports
// Chakra UI
import { Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
// React
import React, { Component } from 'react'
// Next
import Head from 'next/head'
// Cookies
import cookies from 'next-cookies'
// Theme
import ThemeContext, { themes } from '../src/constants/theme'
// UI
import AbsoluteButtonLeft from '../src/components/ui/AbsoluteButtonLeft'
import ChangeThemeModal from '../src/components/ui/ChangeThemeModal'
// Prop Types
import PropTypes from 'prop-types'

// SECTION Main function
class Home extends Component {
  // ANCHOR Constructor
  constructor(props) {
    super(props)

    // Get props & standard constants
    const { theme } = props

    // Set state
    this.state = {
      // Theme
      currentTheme: theme,
      // Theme modal
      isOpenThemeModal: false,
    }
  }

  // ANCHOR Override
  // Mount
  componentDidMount() {}
  // Unmount
  componentWillUnmount() {}

  // ANCHOR Functions
  // Open theme modal
  openThemeModal = () => {
    this.setState({ isOpenThemeModal: true })
  }
  // Close theme modal
  closeThemeModal = () => {
    this.setState({ isOpenThemeModal: false })
  }

  // ANCHOR Render
  render() {
    // Constants
    const { currentTheme, isOpenThemeModal } = this.state
    const testBackgrounds = [
      {
        id: 0,
        image: '/images/1876.jpg',
      },
      {
        id: 2,
        image: '/images/1876.jpg',
      },
      {
        id: 3,
        image: '/images/1876.jpg',
      },
    ]

    // Return statement
    return (
      <Flex minH="100%">
        <Head>
          <title>Average Doods</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/fonts/Dosis-VariableFont_wght.ttf" as="font" crossOrigin="" />
        </Head>

        {/* Main body */}
        <Flex as="main" className="svg-main-bg" minH="100vh" w="100%" justify="center" flexDir="column" align="center">
          {/*}<Img src="/images/space-violet.svg" height="100%" width="100%" position="absolute" objectFit="" />{*/}
          {/*}<Button onClick={changeTheme}>test</Button>{*/}
          {/* Open button */}
          <ChangeThemeModal isOpen={isOpenThemeModal} onClose={this.closeThemeModal} theme={currentTheme} backgrounds={testBackgrounds} />
          <AbsoluteButtonLeft onClick={this.openThemeModal} theme={currentTheme} />
          {/* <DropdownButton theme={currentTheme} isOpen={isOpen} isLoading={isLoading} buttonRef={buttonRef} closeDrawer={closeDrawer} /> */}
        </Flex>
      </Flex>
    )
  }
}

// SECTION Export
// Check current theme
const checkTheme = (ctx) => {
  let tempTheme = themes.colorful
  const { theme } = cookies(ctx)
  if (theme) {
    tempTheme = theme
  }
  return tempTheme
}
// Export server side props
export const getServerSideProps = async (ctx) => {
  const theme = checkTheme(ctx)
  return {
    props: {
      theme,
    },
  }
}
// Prop types
Home.propTypes = {
  theme: PropTypes.object,
}
// Export default
export default Home

/*
const themeContext = React.useContext(ThemeContext)
const [isOpen, setIsOpen] = React.useState(false)
const [isLoading, setIsLoading] = React.useState(true)
let currentTimeout = false
let buttonRef = React.useRef()
const changeTheme = () => {
  if (currentTheme.name === themes.another.name) {
    console.log('another')
    themeContext.changeCurrentTheme(themes.colorful)
    setCurrentTheme(themes.colorful)
    return
  }
  console.log('color')
  themeContext.changeCurrentTheme(themes.another)
  setCurrentTheme(themes.another)
}

const openDrawer = () => {
  clearTimeout(currentTimeout)
  setIsLoading(true)

  if (isOpen) {
    setIsOpen(false)
  } else {
    setIsOpen(true)
    currentTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
}

const closeDrawer = () => {
  if (isOpen) {
    setIsLoading(true)
    setIsOpen(false)
  }
}
*/
