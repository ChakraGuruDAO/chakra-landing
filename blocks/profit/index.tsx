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
    <Box bg="dark.100" pt={{ md: 16, lg: 0 }} pb={{ base: 16, lg: 20 }}>
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
            Every action in the Metaverse requires $CHAKRA - this is a certain
            kind of Energy that allows you to perform certain actions. The
            Metaverse can charge different fees and taxes, depending on
            different actions.
          </Text>
          <Text
            color="pink.100"
            fontSize={{ xl: "28px", base: "16px" }}
            lineHeight="150%"
            fontWeight={300}
          >
            In the basic understanding, you need to know that Energy is always
            wasted, it all depends on how much.
          </Text>
          <Button as="a" href={saleUrl} colorScheme="pink" mt="40px!important">
            Join the pre-sale
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
