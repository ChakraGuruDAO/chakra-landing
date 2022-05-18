import { Container, Box, Heading } from "@chakra-ui/react";

import { Coins } from "components/coins";

export const Token = () => {
  return (
    <Box bg="dark.100" py="120px" pb={{ md: "220px" }}>
      <Container textAlign="center">
        <Heading
          as="h2"
          color="white"
          fontSize={{ xl: "64px", md: "46px" }}
          mb={{ xl: "80px", md: "194px" }}
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
