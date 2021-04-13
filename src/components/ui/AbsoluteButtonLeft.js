/*
 * [UI] Change theme modal
 */
// SECTION Imports
// Chakra UI
import { Button } from '@chakra-ui/button'
// Prop types
import PropTypes from 'prop-types'

// SECTION Main function
function AbsoluteButtonLeft({ onClick = () => {}, theme }) {
  // ANCHOR Return statement
  return (
    <Button
      position="absolute"
      right="7%"
      top="20"
      onClick={onClick}
      // ref={buttonRef}
      borderRadius="6px"
      borderColor={theme.third}
      borderWidth="2px"
      _selected={{
        boxShadow: 'none',
        background: 'auto',
      }}
      _focus={{
        boxShadow: 'none',
        background: 'auto',
      }}
      _active={{
        background: 'auto',
      }}
      _hover={{
        background: 'auto',
        boxShadow: 'none',
      }}
    />
  )
}

// SECTION Export
AbsoluteButtonLeft.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.object,
}
export default AbsoluteButtonLeft
