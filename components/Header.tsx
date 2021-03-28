import React, { useState } from 'react'
import Link from 'next/link'

import {
  AppBar,
  Container,
  Divider,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Home, AssignmentTurnedIn, MenuBook, Menu, Add, MoreVert } from '@material-ui/icons'
import { useMsal } from '@azure/msal-react'

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
  const [isShow, setIsShow] = useState(false)
  const { instance } = useMsal()
  const classes = useStyles()

  const toggleDrawer = (status: boolean) => () => {
    setIsShow(status)
  }

  const menuList = () => (
    <Container onClick={toggleDrawer(false)}>
      <List>
        <Link href={'/'} passHref>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>ホーム</ListItemText>
          </ListItem>
        </Link>
        <Link href={'/tasks'} passHref>
          <ListItem button>
            <ListItemIcon>
              <AssignmentTurnedIn />
            </ListItemIcon>
            <ListItemText>タスク</ListItemText>
          </ListItem>
        </Link>
        <Link href={'/notes'} passHref>
          <ListItem button>
            <ListItemIcon>
              <MenuBook />
            </ListItemIcon>
            <ListItemText>ノート</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => instance.logoutRedirect()}>
          <ListItemText>ログアウト</ListItemText>
        </ListItem>
      </List>
    </Container>
  )

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
        <Fab color="secondary" className={classes.fabButton}>
          <Add />
        </Fab>
        <div className={classes.grow} />
        <IconButton edge="end" color="inherit">
          <MoreVert />
        </IconButton>
      </Toolbar>
      <SwipeableDrawer
        anchor="bottom"
        open={isShow}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {menuList()}
      </SwipeableDrawer>
    </AppBar>
  )
}

export default Header
