import { Container, Box, Heading } from "@chakra-ui/react";

import { Coins } from "components/coins";

export const Token = () => {
  return (
    <Box
      bg="dark.100"
      py={{ base: "80px", md: "120px" }}
      pb={{ base: "80px", md: "220px" }}
    >
      <Container textAlign="center">
        <Heading
          as="h2"
          color="white"
          fontSize={{ xl: "64px", md: "46px", base: "36px" }}
          mb={{ xl: "80px", md: "194px", base: "100px" }}
        >
          The token
        </Heading>
        <Box position="relative" display="flex" justifyContent="center">
          <Coins />
        </Box>
      </Container>
    </Box>
  );
};
