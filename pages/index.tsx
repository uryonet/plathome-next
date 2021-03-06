import React from 'react'
import { Box, Heading } from '@chakra-ui/layout'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Heading as="h1" className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}

export default Home
