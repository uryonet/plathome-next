import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'

import { MsalProvider } from '@azure/msal-react'
import { Configuration, PublicClientApplication } from '@azure/msal-browser'

import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'

const configuration: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_REACT_APP_AZURE_APP_ID
  }
}
const pca = new PublicClientApplication(configuration)

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <MsalProvider instance={pca}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </MsalProvider>
  )
}

export default MyApp
