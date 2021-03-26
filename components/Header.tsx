import React, { useState } from 'react'
import DrawerMenu from './DrawerMenu'

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true)

  const onClickMenu = () => {
    setIsHidden(!isHidden)
  }

  return (
    <nav>
      <h1>plathome</h1>
      <button onClick={onClickMenu}>Drawer Menu</button>
      <DrawerMenu isHidden={isHidden} onClick={onClickMenu} />
    </nav>
  )
}

export default Header
