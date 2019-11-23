import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: App => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: Component => Component,
      })

    // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link ref="styessheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
        </Head>
        <body>
          <Main />
          <script src="/js/jquery-3.3.1.slim.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument