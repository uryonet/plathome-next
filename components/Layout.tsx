import React from 'react'
import Head from 'next/head'
import Header from './Header'
import { Box } from '@chakra-ui/layout'

const Layout: React.FC = ({ children }) => {
  return (
    <Box h="100vh">
      <Head>
        <title>plathome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ja" />
      </Head>
      <Header />
      <div>{children}</div>
    </Box>
  )
}

export default Layout
