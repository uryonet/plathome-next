import React from 'react'
import Link from 'next/link'
import DrawerMenuItem from './DrawerMenuItem'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const SideDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div>
      <DrawerMenuItem to={'/'} onClick={onClose}>
        Home
      </DrawerMenuItem>
      <DrawerMenuItem to={'/tasks'} onClick={onClose}>
        Task
      </DrawerMenuItem>
      <DrawerMenuItem to={'/notes'} onClick={onClose}>
        Note
      </DrawerMenuItem>
    </div>
  )
}

export default SideDrawer
