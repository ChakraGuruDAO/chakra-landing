import type { NextPage } from "next";
import {
  Boys,
  Features,
  Hero,
  Token,
  DAO,
  Profit,
  Team,
  Footer,
  PreSale,
} from "blocks";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Token />
      <Profit />
      <DAO />
      <Team />
      <PreSale />
      <Footer />
    </>
  );
};

export default Home;
