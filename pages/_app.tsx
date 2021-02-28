import '../styles/globals.css'
import {AppProps} from "next/app"
import {Provider} from "react-redux"
import {ChakraProvider} from "@chakra-ui/react";
import store from "../store/store"

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
