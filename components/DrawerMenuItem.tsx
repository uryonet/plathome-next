import React from 'react'
import Link from 'next/link'

type Props = {
  to: string
  onClick: () => void
}

const DrawerMenuItem: React.FC<Props> = ({ children, to, onClick }) => {
  return (
    <Link href={to}>
      <button onClick={onClick}>{children}</button>
    </Link>
  )
}

export default DrawerMenuItem
