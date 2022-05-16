import { Container, Box, Heading } from "@chakra-ui/react";

import { Coins } from "components/coins";

export const Token = () => {
  return (
    <Box bg="dark.100" pt="120px">
      <Container textAlign="center">
        <Heading as="h2" color="white" fontSize="4rem" mb="80px">
          The token
        </Heading>
        <Box position="relative" display="flex" justifyContent="center">
          <Coins />
        </Box>
      </Container>
    </Box>
  );
};
