import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'

import { MsalProvider } from '@azure/msal-react'
import { Configuration, PublicClientApplication } from '@azure/msal-browser'

import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'

const clientId = process.env.NEXT_PUBLIC_REACT_APP_AZURE_APP_ID

const configuration: Configuration = {
  auth: {
    clientId: clientId
  }
}

const pca = new PublicClientApplication(configuration)

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <MsalProvider instance={pca}>
      <ChakraProvider resetCSS>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ChakraProvider>
    </MsalProvider>
  )
}

export default MyApp
