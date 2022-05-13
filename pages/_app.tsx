import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <ChakraProvider theme={theme}>
        <Box bg="#F1F1F5">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
