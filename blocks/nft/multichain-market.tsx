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
    <Box
      bg="dark.100"
      pt={{ base: "100px", md: "140px" }}
      pb={{ base: "50px", md: "68px" }}
    >
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
      </Container>
    </Box>
  );
};
