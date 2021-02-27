import '../styles/globals.css'
import {AppProps} from "next/app"
import {Provider} from "react-redux"
import store from "../store/store"

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
