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
      <Container
        display="flex"
        justifyContent={{ xl: "flex-end", base: "flex-start" }}
        alignItems={{ md: "center", base: "flex-start" }}
        height={{ xl: "800px", base: "700px" }}
      >
        <Boys
          position="absolute"
          top="0"
          bottom="0"
          width={{ base: "100%" }}
          height={{ base: "100%" }}
          left="0"
          right="0"
        />
        <VStack
          maxWidth={{ base: "370px" }}
          justifySelf={{ base: "flex-start", md: "center" }}
          // position={{ base: "absolute" }}
          // top={{ base: "50%" }}
          // transform={{ base: "translateY(-50%)" }}
          zIndex="overlay"
          alignItems="flex-start"
          // background="blackAlpha.600"
          // borderRadius="20px"
          // p="16px"
        >
          <Heading
            color={{ xl: "white", base: "brand.100" }}
            textTransform="uppercase"
            mt={{ base: "64px", md: 0 }}
            fontWeight={500}
            fontSize={{ xl: "64px", md: "46px", base: "26px" }}
            lineHeight="120%"
          >
            COMPETE AND WIN
          </Heading>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", base: "16px" }}
            lineHeight="150%"
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
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
