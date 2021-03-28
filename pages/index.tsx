import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react'
import React from 'react'
import { Button, Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh'
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100% - 56px)'
  }
}))

const Home: React.FC = () => {
  const { instance } = useMsal()
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Box className={classes.flexBox}>
        <h1>Welcome to plathome!</h1>
        <AuthenticatedTemplate>
          <p>ログイン済みです。</p>
          <Button variant="contained" color="secondary" onClick={() => instance.logoutRedirect()}>
            ログアウト
          </Button>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p>ログインが必要です。</p>
          <Button variant="contained" color="primary" onClick={() => instance.loginRedirect()}>
            ログイン
          </Button>
        </UnauthenticatedTemplate>
      </Box>
    </Container>
  )
}

export default Home
