import React from 'react'
import { Heading } from '@chakra-ui/layout'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Heading as="h1">Welcome to plathome!</Heading>
      </main>
    </div>
  )
}

export default Home
