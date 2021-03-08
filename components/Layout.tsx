import React from 'react'
import Head from 'next/head'
import Header from './Header'
import { Box } from '@chakra-ui/layout'

import { MsalAuthenticationTemplate } from '@azure/msal-react'
import { InteractionType } from '@azure/msal-browser'

const Layout: React.FC = ({ children }) => {
  const authRequest = {
    scopes: ['openid', 'profile']
  }

  return (
    <Box h="100vh">
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
        <div>{children}</div>
      </MsalAuthenticationTemplate>
    </Box>
  )
}

export default Layout
