import React from 'react'
import Head from 'next/head'
import Header from './Header'

import { MsalAuthenticationTemplate } from '@azure/msal-react'
import { InteractionType } from '@azure/msal-browser'

const Layout: React.FC = ({ children }) => {
  const authRequest = {
    scopes: ['openid', 'profile']
  }

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>plathome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ja" />
      </Head>
      <Header />
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={authRequest}
      >
        <div className="container h-full">{children}</div>
      </MsalAuthenticationTemplate>
    </div>
  )
}

export default Layout
