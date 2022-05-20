import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { saleUrl } from "config/links";

export const Profit = () => {
  return (
    <Box bg="dark.100" py={{ lg: "90px", md: "80px" }}>
      <Container justifyContent="flex-end" display="flex">
        <VStack maxW={{ xl: "765px", md: "406px" }} alignItems="flex-start">
          <Heading
            fontSize={{ xl: "64px", md: "46px", base: "36px" }}
            color="white"
            as="h2"
            mb="40px"
            fontWeight={500}
          >
            How do we&nbsp;
            <Text as="span" color="brand.100">
              profit
            </Text>
          </Heading>
          <Text
            color="white"
            fontSize={{ xl: "28px", base: "16px" }}
            lineHeight="150%"
            fontWeight={300}
          >
            We charge small taxes with actions and interactions in the
            metaverse. All assets in the CHAKRA dApp are owned by individual
            users and most of the income in the app is generated by users.
          </Text>
          <Button as="a" href={saleUrl} variant="white" mt="40px!important">
            Join the pre-sale
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
