import { Container, Box, Heading, Text, Img, VStack } from "@chakra-ui/react";
import { TokenomicGraph } from "components/tokenomic-graph";

import data from "./data.json";

export const KarmaTokenomic = () => {
  return (
    <Box bg="dark.100" py={{ base: "80px", md: "150px" }}>
      <Container>
        <VStack>
          <Heading
            as="h2"
            fontSize={{ xl: "64px", md: "40px", base: "24px" }}
            fontWeight={500}
            color="white"
            display="flex"
            alignItems="center"
            mb={{ xl: "70px", md: "70px", base: "30px" }}
          >
            Token&nbsp;
            <Img
              display="inline-block"
              src="/karma.svg"
              boxSize={{ xl: "75px", md: "64px", base: "24px" }}
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
