import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
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
      <body className="bg-black text-black dark:bg-black dark:text-white">
        <div id="root">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
