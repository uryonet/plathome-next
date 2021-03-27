import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>plathome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ja" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <div>{children}</div>
      <Header />
    </div>
  )
}

export default Layout
