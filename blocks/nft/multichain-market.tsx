import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";

export const MultichainMarket = () => {
  return (
    <Box bg="dark.100" py={{ base: "80px", md: "140px" }}>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={{ base: "30px", md: "30px" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <VStack alignItems="flex-start">
          <Heading
            color="white"
            textTransform="uppercase"
            fontWeight={500}
            fontSize={{ xl: "64px", md: "46px", base: "36px" }}
            lineHeight="120%"
          >
            <Text color="brand.100">MULTI-CHAIN</Text>
            MARKET
          </Heading>
          <Text
            color="white"
            fontWeight={300}
            lineHeight="150%"
            fontSize={{ xl: "20px", base: "16px" }}
            maxW={{ base: "367px" }}
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", base: "16px" }}
            lineHeight="150%"
            maxW={{ base: "367px" }}
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
        </VStack>
        <Img src="/multi-chain.png" width={{ base: "100%", md: "45%" }} />
      </Container>
    </Box>
  );
};
