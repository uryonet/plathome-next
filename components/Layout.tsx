import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>plathome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ja" />
      </Head>
      <Header />
      <div className="container h-full">{children}</div>
    </div>
  )
}

export default Layout
