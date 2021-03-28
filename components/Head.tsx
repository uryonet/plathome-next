import React from 'react'
import Head from 'next/head'

const MainHead: React.FC = () => {
  return (
    <Head>
      <title>plathome</title>
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="content-language" content="ja" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
  )
}

export default MainHead
