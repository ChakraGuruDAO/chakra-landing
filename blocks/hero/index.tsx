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
import { Logo } from "components/logo";
import { Socials } from "components/socials";
import { Earth } from "components/earth";
import { PRE_SALE_LINK } from "config/links";

export const Hero = () => {
  return (
    <Box
      position="relative"
      bgGradient="linear(161.64deg, #060622, #090913)"
      pt={{ base: "20px" }}
      pb={{ lg: "600px", md: "500px", base: "300px" }}
      overflow="hidden"
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
        centerContent
        flexDir="column"
        alignItems="center"
        mb={{ xl: "20px", md: "30px" }}
      >
        <HStack
          justifyContent="space-between"
          w="100%"
          mb={{ xl: "20px", lg: "20px", md: "60px", base: "100px" }}
        >
          <Link href="#">
            <Logo />
          </Link>

          <Socials />
        </HStack>
        <VStack textAlign="center" maxW="50rem">
          <Button
            as="a"
            href={PRE_SALE_LINK}
            colorScheme="pink"
            variant="solid"
            height={{ base: "30px" }}
          >
            Join the pre-sale
          </Button>
          <Heading
            lineHeight="110%"
            as="h1"
            fontSize={{ xl: "80px", md: "60px", base: "36px" }}
            color="white"
            fontWeight={500}
            mb="20px"
          >
            Together, we build the&nbsp;
            <Text
              as="span"
              display={{ base: "block", sm: "block", lg: "inline" }}
              color="brand.100"
              wordBreak="break-word"
            >
              AR-Metaverse
            </Text>
          </Heading>
          <Text
            color="white"
            fontSize={{ xl: "20px", md: "20px", base: "16px" }}
            maxW={{ xl: "560px", base: "90%" }}
          >
            We are a decentralized autonomous organization whose mission is to
            aggregate existing realities. Let&apos;s build the metaverse by
            empowering people to be a part of it.
          </Text>
        </VStack>
      </Container>
      <Earth />
    </Box>
  );
};
