import React, { useState } from 'react'
import DrawerMenu from './DrawerMenu'

import { Button } from '@material-ui/core'

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true)

  const onClickMenu = () => {
    setIsHidden(!isHidden)
  }

  return (
    <nav>
      <h1>plathome</h1>
      <Button variant="contained" color="primary" onClick={onClickMenu}>Drawer Menu</Button>
      <DrawerMenu isHidden={isHidden} onClick={onClickMenu} />
    </nav>
  )
}

export default Header
