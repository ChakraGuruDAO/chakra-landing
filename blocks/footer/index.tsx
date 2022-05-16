import { Box, Container, Heading, VStack, Text } from "@chakra-ui/react";
import { Socials } from "components/socials";

export const Footer = () => {
  return (
    <Box as="footer" bg="dark.100" py="180px">
      <Container>
        <VStack
          backgroundImage="url(/footer-bg.png)"
          backgroundSize="cover"
          backgroundPosition="bottom"
          borderRadius="20px"
          borderWidth="1px"
          borderColor="brand.100"
          justifyContent="center"
          minH={{ base: "360px" }}
          textAlign="center"
        >
          <Heading
            color="white"
            fontSize={{ base: "40px" }}
            textTransform="uppercase"
          >
            Join our social networks
          </Heading>
          <Text
            fontWeight={300}
            color="white"
            fontSize={{ base: "20px" }}
            maxW={{ base: "500px" }}
          >
            Follow our metaverse, announcements, latest news and be aware of all
            the events.
          </Text>
          <Socials />
        </VStack>
      </Container>
    </Box>
  );
};
