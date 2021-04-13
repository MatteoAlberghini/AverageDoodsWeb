/*
 * [UI] Dropdown menu
 */
// SECTION Imports
import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

// SECTION File variables
// Motion
const MotionFlex = motion(Flex)

function useOuterClick(callback) {
  const callbackRef = React.useRef() // initialize mutable callback ref
  const innerRef = React.useRef() // returned to client, who sets the "border" element

  // update callback on each render, so second useEffect has most recent callback
  React.useEffect(() => {
    callbackRef.current = callback
  })
  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
    function handleClick(e) {
      if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target)) callbackRef.current(e)
    }
  }, []) // no dependencies -> stable click listener

  return innerRef // convenience for client (doesn't need to init ref himself)
}

// SECTION Main function
function DropdownButton({ theme, isLoading, isOpen, buttonRef, closeDrawer = () => {} }) {
  // ANCHOR Constants
  // State
  const [isOpenState, setIsOpenState] = React.useState(false)
  // Ref
  let parentRef = React.useRef()
  let outerRef = useOuterClick(() => {
    closeDrawer()
  })
  let currentTimeout = null

  // ANCHOR Functions
  React.useEffect(() => {
    setIsOpenState(isOpen)
  }, [isOpen])

  // ANCHOR Return statement
  return (
    <>
      {/* Menu with arrow */}
      <Flex flexDir="column" ref={parentRef} width="200px" height="150px">
        <AnimatePresence>
          {isOpenState && (
            <MotionFlex
              zIndex="4"
              key="menu"
              className="arrow-menu"
              background="transparent"
              width="200px"
              height="150px"
              position="absolute"
              border="1px solid transparent"
              style={{ originY: 0, originX: 0.85 }}
              initial={{ y: 0, scale: 0, translateZ: 0, transition: { ease: [0.175, 0.885, 0.4, 1.1] } }}
              animate={{ y: 18, scale: 1, translateZ: 0 }}
              exit={{ y: 0, scale: 0, translateZ: 0, transition: { duration: 0.15 } }}
              top={buttonRef.current.offsetTop + buttonRef.current.offsetHeight}
              left={buttonRef.current.offsetLeft + buttonRef.current.offsetWidth - 180}
              flexDirection="column"
              ref={outerRef}
            >
              {/* Arrow */}
              <MotionFlex
                borderTopWidth="2px"
                borderLeftWidth="2px"
                key="arrow"
                borderTopColor={theme.third}
                borderLeftColor={theme.third}
                initial={{ opacity: 1, rotate: 45 }}
                exit={{ opacity: 0 }}
                className="arrow"
                background={theme.dark}
                borderRadius="2px"
                boxShadow="none"
              />
              {/* Internal */}
              <Flex
                width="100%"
                height="100%"
                background={theme.dark}
                borderRadius="5px"
                borderColor={theme.third}
                borderWidth="2px"
                flexWrap="wrap"
                paddingTop="5px"
                paddingBottom="5px"
              >
                {isLoading ? null : (
                  <>
                    <Flex
                      w="40px"
                      h="40px"
                      borderRadius="50%"
                      borderWidth="2px"
                      borderColor={theme.third}
                      justify="center"
                      ms="8px"
                      align="center"
                      overflow="hidden"
                    >
                      <Img src="/images/space.svg" boxSize="40px" objectFit="cover" />
                    </Flex>
                    <Img src="/images/space.svg" width="50px" height="50px" marginStart="8px" />
                    <Img src="/images/space.svg" width="50px" height="50px" marginStart="8px" />
                    <Img src="/images/space.svg" width="50px" height="50px" marginStart="8px" />
                    <Img src="/images/space.svg" width="50px" height="50px" marginStart="8px" />
                  </>
                )}
              </Flex>
            </MotionFlex>
          )}
        </AnimatePresence>
      </Flex>
    </>
  )
}

// SECTION Export
export default DropdownButton
