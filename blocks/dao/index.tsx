import { Container, Box, Heading, Text } from "@chakra-ui/react";
import { DAOCard } from "./card";

export const DAO = () => {
  return (
    <Box bg="white" py={{ base: "80px", md: "170px" }}>
      <Container>
        <Heading
          as="h2"
          color="black"
          textAlign="center"
          lineHeight="100%"
          fontSize={{ xl: "110px", md: "64px", base: "36px" }}
          mb="50px"
        >
          <Text fontWeight={400}>Decentralized.</Text>
          <Text fontWeight={500}>Autonomic Engine.</Text>
        </Heading>

        <DAOCard />
      </Container>
    </Box>
  );
};
