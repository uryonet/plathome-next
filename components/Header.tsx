import React, { useState } from 'react'
import DrawerMenu from './DrawerMenu'

import { AppBar, Button, Fab, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import MoreIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}))

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true)
  const classes = useStyles()

  const onClickMenu = () => {
    setIsHidden(!isHidden)
  }

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Fab color="secondary" className={classes.fabButton}>
          <AddIcon />
        </Fab>
        <div className={classes.grow} />
        <IconButton edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
