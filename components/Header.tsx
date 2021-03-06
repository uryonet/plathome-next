import React, { useEffect } from 'react'
import SideDrawer from './SideDrawer'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Box, Heading, Spacer } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex bg="white" p="3" borderBottom="1px solid #ddd" h="65px">
      <Box p="2">
        <Heading size="md">plathome</Heading>
      </Box>
      <Spacer />
      <Box>
        <IconButton
          onClick={onOpen}
          colorScheme="teal"
          aria-label="sidebar menu"
          icon={<HamburgerIcon />}
        />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default Header
