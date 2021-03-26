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
      </Head>
      <Header />
      <div className="p-3">{children}</div>
    </div>
  )
}

export default Layout
