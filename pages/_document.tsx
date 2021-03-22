import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
