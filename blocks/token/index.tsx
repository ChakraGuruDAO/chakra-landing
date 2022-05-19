import { Container, Box, Heading, VStack } from "@chakra-ui/react";

import { Coins } from "components/coins";
import { CoinLabel } from "components/coins/label";

export const Token = () => {
  return (
    <Box
      bg="dark.100"
      py={{ base: "80px", md: "100px" }}
      pb={{ base: "80px", md: "100px" }}
    >
      <Container textAlign="center">
        <Heading
          as="h2"
          color="white"
          fontSize={{ xl: "64px", md: "46px", base: "36px" }}
          mb={{ xl: "80px", md: "100px", base: "100px" }}
        >
          The token
        </Heading>
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          py={{ md: "150px" }}
          pb={{ base: "200px", md: "150px" }}
        >
          <Coins />
          <CoinLabel
            position={{ md: "absolute" }}
            value="If you want to earn with the #karma token, you can do it on the exchange"
            color="brand.100"
            bottom="0"
            left="0"
          />
          <CoinLabel
            position={{ md: "absolute" }}
            top="0"
            right="0"
            value="If you want to earn with the #karma token, you can do it on the exchange"
            color="pink.100"
          />
        </Box>
      </Container>
    </Box>
  );
};
