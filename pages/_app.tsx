import { Configuration, PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import store from '../store/store'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { blue, pink } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[200]
    },
    secondary: {
      main: pink[200]
    },
    type: 'dark'
  }
})

const configuration: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_APP_ID,
    authority: 'https://login.microsoftonline.com/' + process.env.NEXT_PUBLIC_AZURE_TENANT_ID
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
    <MsalProvider instance={pca}>
      <ThemeProvider theme={materialTheme}>
        <Provider store={store}>
          <CssBaseline />
          <AuthenticatedTemplate>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <Component {...pageProps} />
          </UnauthenticatedTemplate>
        </Provider>
      </ThemeProvider>
    </MsalProvider>
  )
}

export default MyApp
