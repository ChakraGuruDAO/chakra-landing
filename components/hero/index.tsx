import {
  Box,
  Container,
  Heading,
  HStack,
  VStack,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "../logo";
import { Socials } from "../socials";

export const Hero = () => {
  return (
    <Box
      position="relative"
      bgGradient="linear(161.64deg, #060622, #090913)"
      py={50}
      pb={200}
    >
      <Box
        opacity={0.4}
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex={0}
      />
      <Container
        position="relative"
        zIndex={1}
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <HStack justifyContent="space-between" w="100%" mb="100px">
          <Link href="#">
            <Logo />
          </Link>

          <Socials telegram="#" discord="#" twitter="#" />
        </HStack>
        <VStack textAlign="center" maxW="50rem">
          <Button colorScheme="pink" variant="solid">
            Join the pre-sale
          </Button>
          <Heading
            lineHeight="110%"
            as="h1"
            fontSize="80px"
            color="white"
            fontWeight={500}
            mb="20px"
          >
            Together, we build the&nbsp;
            <Text as="span" color="brand.100">
              AR-Metaverse
            </Text>
          </Heading>
          <Text color="white" maxW="28rem">
            We are a decentralized autonomous organization whose mission is to
            aggregate existing realities. Let&apos;s build the metaverse by
            empowering people to be a part of it.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
