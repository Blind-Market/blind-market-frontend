import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MainDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="light">
        <Head>
          <meta name="author" content="Blind Market" />
          <meta
            name="description"
            content="Blind Market, enjoy everything on web3"
          />
          <meta
            name="keywords"
            content="Blind Market, enjoy everything on web3"
          />
        </Head>
        <body className="bg-white dark:bg-blind_market text-black dark:text-white">
          <div id="root">
            <Main />
            <NextScript />
            <div id="modal-root"></div>
          </div>
        </body>

        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Html>
    );
  }
}

export default React.memo(MainDocument);
