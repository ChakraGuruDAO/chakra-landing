import type { NextPage } from "next";
import {
  NFT,
  Features,
  Hero,
  Token,
  DAO,
  Profit,
  Team,
  Footer,
  PreSale,
  Roadmap,
  KarmaTokenomic,
  ChakraTokenomic,
} from "blocks";
import Script from "next/script";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
      />
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src="//cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.min.js"
      />
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src="//cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min.js"
      />
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src="//cdnjs.cloudflare.com/ajax/libs/stats.js/r11/Stats.min.js"
      />
      <Script type="text/javascript" src="/earth.js" />
      <Hero />
      <Features />
      <NFT />
      <Token />
      <Profit />
      <KarmaTokenomic />
      <DAO />
      <ChakraTokenomic />
      <Team />
      <Roadmap />
      <PreSale />
      <Footer />
    </>
  );
};

export default Home;
