import React from 'react'
import Link from 'next/link'
import { Stack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/modal'
import DrawerMenuItem from './DrawerMenuItem'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const SideDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} motionPreset="none">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>menu</DrawerHeader>
          <DrawerBody>
            <Stack>
              <DrawerMenuItem to={"/"} onClick={onClose}>Home</DrawerMenuItem>
              <DrawerMenuItem to={"/tasks"} onClick={onClose}>Task</DrawerMenuItem>
              <DrawerMenuItem to={"/notes"} onClick={onClose}>Note</DrawerMenuItem>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default SideDrawer
