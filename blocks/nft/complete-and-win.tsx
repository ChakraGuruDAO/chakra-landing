import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Boys } from "components/boys";

export const CompeteWin = () => {
  return (
    <Box bg="dark.100" position="relative" height={{ base: "600px" }}>
      <Box
        position="absolute"
        height="100%"
        width={{ base: "40%" }}
        zIndex="overlay"
        right="0"
      ></Box>
      <Container display="flex" justifyContent="flex-end" alignItems="center">
        <Boys
          position="absolute"
          top="0"
          bottom="0"
          width={{ base: "60%" }}
          height={{ base: "600px" }}
          left="0"
          right="0"
        />
        <VStack
          maxWidth="370px"
          justifySelf="center"
          position={{ base: "absolute" }}
          top={{ base: "50%" }}
          transform={{ base: "translateY(-50%)" }}
          zIndex="overlay"
        >
          <Heading
            color="white"
            textTransform="uppercase"
            fontWeight={500}
            fontSize="64px"
            lineHeight="120%"
          >
            COMPETE AND WIN
          </Heading>
          <Text
            color="white"
            fontWeight={300}
            lineHeight="150%"
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
          <Text
            color="white"
            fontWeight={300}
            lineHeight="150%"
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
