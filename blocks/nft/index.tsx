import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { CatchCraft } from "./catch-and-craft";
import { CompeteWin } from "./complete-and-win";
import { MultichainMarket } from "./multichain-market";

export const NFT = ({}) => {
  return (
    <>
      <CatchCraft />
      <CompeteWin />
      <MultichainMarket />
    </>
  );
};
