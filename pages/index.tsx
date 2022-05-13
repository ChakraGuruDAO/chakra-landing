import type { NextPage } from "next";
import { Boys } from "../components/boys";
import { Features } from "../components/features";
import { Hero } from "../components/hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Boys endScroll={900} />
    </>
  );
};

export default Home;
