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
    <Box bg="dark.100" position="relative">
      <Box
        position="absolute"
        height="100%"
        width={{ xl: "40%", md: "50%" }}
        zIndex="overlay"
        right="0"
      ></Box>
      <Container
        display="flex"
        justifyContent={{ xl: "flex-end", md: "flex-start" }}
        alignItems="center"
        height={{ xl: "800px", md: "700px" }}
      >
        {/* <Boys
          position="absolute"
          top="0"
          bottom="0"
          width={{ base: "100%" }}
          height={{ base: "100%" }}
          left="0"
          right="0"
        /> */}
        <VStack
          maxWidth={{ base: "370px" }}
          justifySelf="center"
          // position={{ base: "absolute" }}
          // top={{ base: "50%" }}
          // transform={{ base: "translateY(-50%)" }}
          zIndex="overlay"
        >
          <Heading
            color={{ xl: "white", md: "brand.100" }}
            textTransform="uppercase"
            fontWeight={500}
            fontSize={{ xl: "64px", md: "46px" }}
            lineHeight="120%"
          >
            COMPETE AND WIN
          </Heading>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", md: "16px" }}
            lineHeight="150%"
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", md: "16px" }}
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
