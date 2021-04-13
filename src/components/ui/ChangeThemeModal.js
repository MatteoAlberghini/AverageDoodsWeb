/*
 * [UI] Change theme modal
 */
// SECTION Imports
import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Img, Button, Text, Heading, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Checkbox } from '@chakra-ui/react'

// SECTION Main function
function ChangeThemeModal({ isOpen = () => {}, onClose = () => {}, theme, backgrounds = [] }) {
  // ANCHOR Return statement
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered autoFocus={false}>
      <ModalOverlay />
      <ModalContent minW="550px" background={theme.dark} p={0} borderRadius="25px">
        <ModalBody marginTop="25px" marginBottom="25px" alignItems="center" justifyContent="center">
          {/* Title */}
          <Heading alignSelf="center" color={theme.white} fontWeight={'600'} fontSize="23px" textAlign="center" letterSpacing={'1.5px'}>
            Customize your view
          </Heading>
          {/* Subtitle */}
          <Text color={theme.grey} fontSize="18px" textAlign="center" fontWeight={'500'} mt="10px" letterSpacing="1px">
            Manage your color theme and background. These settings affect all the Twitter accounts on this browser.
          </Text>

          {/* Background */}
          <Text alignSelf="flex-start" mt={['30px']} textAlign="left" color={theme.grey} fontWeight="600" letterSpacing="1px" fontSize="15px">
            Background
          </Text>
          {/* Background Images */}
          <Flex
            background={theme.grey}
            borderRadius="10px"
            paddingTop="5px"
            paddingBottom="5px"
            paddingStart="13px"
            paddingEnd="13px"
            mt="10px"
            align="center"
            justify="space-between"
          >
            {backgrounds.map((e) => (
              <Flex
                key={e.id}
                width="150px"
                height="30px"
                minH="68px"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
                overflow="hidden"
                borderRadius="8px"
              >
                <Checkbox position="absolute" marginTop="10px" marginStart="10px" />
                <Img src={e.image} objectFit="cover" w="100%" />
              </Flex>
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

// SECTION Export
ChangeThemeModal.propTypes = {
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  theme: PropTypes.object,
}
export default ChangeThemeModal
