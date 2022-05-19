import { Box, Container, Heading, VStack, Text } from "@chakra-ui/react";
import { FooterSocials } from "components/footer-socials";
import { Socials } from "components/socials";
import { FooterBottom } from "./bottom";

export const Footer = () => {
  return (
    <>
      <Box bg="dark.100" py={{ base: "80px", md: "100px" }}>
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
              fontSize={{ xl: "40px", md: "32px" }}
              textTransform="uppercase"
              fontWeight={500}
            >
              Join our social networks
            </Heading>
            <Text
              fontWeight={300}
              color="white"
              fontSize={{ xl: "20px", md: "16px" }}
              maxW={{ base: "500px" }}
              mb={{ xl: "20px!important" }}
            >
              Follow our metaverse, announcements, latest news and be aware of
              all the events.
            </Text>
            <FooterSocials />
          </VStack>
        </Container>
      </Box>
      <FooterBottom />
    </>
  );
};
