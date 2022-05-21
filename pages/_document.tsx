import { ColorModeScript } from "@chakra-ui/react";
import { Favicon } from "components/favicon";
import { Metadata } from "components/metadata";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import theme from "../theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <Favicon />
          <Metadata />
          <link rel="stylesheet" href="/global.css" />
          <script
            type="text/javascript"
            src="//static.sketchfab.com/api/sketchfab-viewer-1.12.0.js"
            async
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
