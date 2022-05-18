import { Container, Box, Heading, Text, Img, VStack } from "@chakra-ui/react";
import { TokenomicGraph } from "components/tokenomic-graph";

import data from "./data.json";

export const ChakraTokenomic = () => {
  return (
    <Box bg="dark.100" pt={{ base: "200px" }}>
      <Container>
        <VStack>
          <Heading
            as="h2"
            fontSize={{ xl: "64px", md: "40px" }}
            fontWeight={500}
            color="white"
            display="flex"
            alignItems="center"
            mb={{ xl: "70px", md: "70px" }}
          >
            Token&nbsp;
            <Img
              display="inline-block"
              src="/chakra.svg"
              boxSize={{ xl: "75px", md: "64px" }}
            />
            &nbsp;
            <Text color="brand.100" as="span">
              CHAKRA
            </Text>
            &nbsp;Distribution
          </Heading>

          <TokenomicGraph items={data} />
        </VStack>
      </Container>
    </Box>
  );
};
