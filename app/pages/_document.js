import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/> 
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/> 
            <link href="https://fonts.googleapis.com/css2?family=Gwendolyn:wght@700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Gwendolyn:wght@700&family=Spectral:ital,wght@1,600;1,800&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument