import React from 'react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader } from '@chakra-ui/modal'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerMenu: React.FC<Props> = ({isOpen, onClose}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>plathome</DrawerHeader>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default DrawerMenu
