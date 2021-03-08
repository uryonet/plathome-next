import React from 'react'
import { Heading } from '@chakra-ui/layout'
import styles from '../styles/Home.module.css'
import { useIsAuthenticated } from '@azure/msal-react'

const Home: React.FC = () => {
  const isAuthenticated = useIsAuthenticated()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Heading as="h1">Welcome to plathome!</Heading>
        {isAuthenticated && (
          <p>ログイン済みです。</p>
        )}
        {!isAuthenticated && (
          <p>ログインが必要です。</p>
        )}
      </main>
    </div>
  )
}

export default Home
