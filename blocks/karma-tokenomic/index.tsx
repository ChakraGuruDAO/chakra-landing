import { Container, Box, Heading, Text, Img, VStack } from "@chakra-ui/react";
import { TokenomicGraph } from "components/tokenomic-graph";

import data from "./data.json";

export const KarmaTokenomic = () => {
  return (
    <Box bg="dark.100" pt={{ base: "200px" }}>
      <Container>
        <VStack>
          <Heading
            as="h2"
            fontSize={{ base: "64px" }}
            fontWeight={500}
            color="white"
            display="flex"
            alignItems="center"
          >
            Token&nbsp;
            <Img display="inline-block" src="/karma.svg" boxSize="75px" />
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
