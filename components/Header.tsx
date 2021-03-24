import React, { useState } from 'react'
import DrawerMenu from './DrawerMenu'

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true)

  const onClickMenu = () => {
    setIsHidden(!isHidden)
  }

  return (
    <nav className="is-flex p-3 header">
      <h1 className="is-size-4">plathome</h1>
      <button className="button is-primary ml-auto" onClick={onClickMenu}>
        <span className="icon">
          <i className="fas fa-bars"></i>
        </span>
      </button>
      <DrawerMenu isHidden={isHidden} onClick={onClickMenu}/>
    </nav>
  )
}

export default Header
