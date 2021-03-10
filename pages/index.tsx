import React from 'react'
import { useIsAuthenticated } from '@azure/msal-react'

const Home: React.FC = () => {
  const isAuthenticated = useIsAuthenticated()

  return (
    <div className="container">
      <h1>Welcome to plathome!</h1>
      {isAuthenticated && <p>ログイン済みです。</p>}
      {!isAuthenticated && <p>ログインが必要です。</p>}
    </div>
  )
}

export default Home
