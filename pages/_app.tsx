import { Configuration, PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import store from '../store/store'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const materialTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const configuration: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_REACT_APP_AZURE_APP_ID
  }
}
const pca = new PublicClientApplication(configuration)

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={materialTheme}>
      <MsalProvider instance={pca}>
        <Provider store={store}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </MsalProvider>
    </ThemeProvider>
  )
}

export default MyApp
