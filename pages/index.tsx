import { useIsAuthenticated } from '@azure/msal-react'
import React from 'react'
import { Button } from '@material-ui/core'

const Home: React.FC = () => {
  const isAuthenticated = useIsAuthenticated()

  return (
    <div>
      <h1>Welcome to plathome!</h1>
      {isAuthenticated && <p>ログイン済みです。</p>}
      {!isAuthenticated && <p>ログインが必要です。</p>}
      <Button variant="contained" color="primary">
        ログイン
      </Button>
    </div>
  )
}

export default Home
