import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export const MultichainMarket = () => {
  return (
    <Box bg="dark.100" pt="140px" pb="68px">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack alignItems="flex-start">
          <Heading
            color="white"
            textTransform="uppercase"
            fontWeight={500}
            fontSize="64px"
            lineHeight="120%"
          >
            <Text color="brand.100">MULTI-CHAIN</Text>
            MARKET
          </Heading>
          <Text
            color="white"
            fontWeight={300}
            lineHeight="150%"
            maxW={{ base: "367px" }}
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
          <Text
            color="white"
            fontWeight={300}
            lineHeight="150%"
            maxW={{ base: "367px" }}
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
