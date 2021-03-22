import Link from 'next/link'
import React from 'react'

type Props = {
  to: string
  onClick: () => void
}

const DrawerMenu: React.FC<Props> = ({ children, to, onClick }) => {
  return (
    <aside>
      <Link href={to}>
        <button onClick={onClick}>{children}</button>
      </Link>
    </aside>
  )
}

export default DrawerMenu
