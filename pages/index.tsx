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
} from "blocks";
import Script from "next/script";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//static.sketchfab.com/api/sketchfab-viewer-1.12.0.js"
        />
      </Head>
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
      <NFT />
      <Features />
      <Token />
      <Profit />
      <DAO />
      <KarmaTokenomic />
      <Team />
      <Roadmap />
      <PreSale />
      <Footer />
    </>
  );
};

export default Home;
