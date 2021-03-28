import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react'
import React from 'react'
import { Button } from '@material-ui/core'

const Home: React.FC = () => {
  const { instance } = useMsal()

  return (
    <div>
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
    </div>
  )
}

export default Home
