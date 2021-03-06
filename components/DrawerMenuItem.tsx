import React from 'react'
import Link from 'next/link'
import { Button } from '@chakra-ui/button'

type Props = {
  to: string
  onClick: () => void
}

const DrawerMenuItem: React.FC<Props> = ({ children, to, onClick }) => {
  return (
    <Link href={to}>
      <Button isFullWidth variant="outline" onClick={onClick}>
        {children}
      </Button>
    </Link>
  )
}

export default DrawerMenuItem
