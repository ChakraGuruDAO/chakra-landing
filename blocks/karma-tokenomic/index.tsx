import { Container, Box, Heading, Text, Img, VStack } from "@chakra-ui/react";
import { TokenomicGraph } from "components/tokenomic-graph";

import data from "./data.json";

export const KarmaTokenomic = () => {
  return (
    <Box bg="dark.100" py={{ base: "150px" }}>
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
              src="/karma.svg"
              boxSize={{ xl: "75px", md: "64px" }}
            />
            &nbsp;
            <Text color="brand.100" as="span">
              KARMA
            </Text>
            &nbsp;Distribution
          </Heading>

          <TokenomicGraph items={data} />
        </VStack>
      </Container>
    </Box>
  );
};
