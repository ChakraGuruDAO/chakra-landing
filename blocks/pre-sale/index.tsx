import {
  Container,
  Box,
  SimpleGrid,
  Heading,
  VStack,
  Text,
  StackDivider,
  HStack,
  Img,
  Button,
  Progress,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { PreSaleLine } from "components/pre-sale-line";
import { PreSaleTimer } from "components/pre-sale-timer";

export const PreSale = () => {
  return (
    <Box bg="white" py={{ base: "130px" }}>
      <Container>
        <SimpleGrid columns={2} spacing={{ base: "30px" }}>
          <VStack alignItems="flex-start">
            <Heading
              as="h1"
              fontSize={{ base: "80px" }}
              fontWeight={500}
              color="brand.100"
            >
              Pre-sale
            </Heading>
            <Text fontSize={{ base: "20px" }} fontWeight={300} color="black">
              The CHAKRA DAO offers two core pools. Variable locking for up to
              twelve months is available for MC and LP staking.
            </Text>
            <PreSaleTimer
              mt={{ base: "54px!important" }}
              expireOn={dayjs().add(1, "months").toDate()}
            />
          </VStack>
          <VStack
            alignItems="flex-start"
            borderRadius="20px"
            borderColor="brand.100"
            borderWidth="2px"
            p="28px"
            spacing={{ base: "26px" }}
            divider={<StackDivider borderColor="#A0A0A0" />}
          >
            <HStack justifyContent="space-between" width="100%">
              <HStack>
                <Img src="/chakra.svg" boxSize={{ base: "80px" }} />
                <VStack alignItems="flex-start" spacing={0}>
                  <Text
                    color="#A0A0A0"
                    fontSize={{ base: "16px" }}
                    fontWeight={400}
                  >
                    Token
                  </Text>
                  <Text
                    textTransform="uppercase"
                    color="black"
                    fontWeight={600}
                    lineHeight="150%"
                    fontSize={{ base: "28px" }}
                  >
                    Chakra
                  </Text>
                </VStack>
              </HStack>
              <VStack alignItems="flex-end" spacing="0">
                <Text
                  color="#A0A0A0"
                  fontSize={{ base: "16px" }}
                  fontWeight={400}
                >
                  Price
                </Text>
                <Text
                  textTransform="uppercase"
                  color="black"
                  fontWeight={600}
                  lineHeight="150%"
                  fontSize={{ base: "28px" }}
                >
                  $0.1
                </Text>
                <Text
                  color="#A0A0A0"
                  fontSize={{ base: "16px" }}
                  fontWeight={400}
                >
                  0.00124 AVAX
                </Text>
              </VStack>
            </HStack>

            <VStack width="100%" spacing={{ base: "12px" }}>
              <HStack justifyContent="space-between" width="100%">
                <VStack alignItems="flex-start" spacing={0}>
                  <Text
                    color="#A0A0A0"
                    fontSize={{ base: "16px" }}
                    fontWeight={400}
                  >
                    Pre-sale
                  </Text>
                  <Text
                    textTransform="uppercase"
                    color="black"
                    fontWeight={600}
                    lineHeight="150%"
                    fontSize={{ base: "20px" }}
                  >
                    COMING SOON
                  </Text>
                </VStack>
                <VStack alignItems="flex-end" spacing="0">
                  <Text
                    color="#A0A0A0"
                    fontSize={{ base: "16px" }}
                    fontWeight={400}
                  >
                    Time left
                  </Text>
                  <Text
                    textTransform="uppercase"
                    color="black"
                    fontWeight={600}
                    lineHeight="150%"
                    fontSize={{ base: "20px" }}
                  >
                    SALE ENDED
                  </Text>
                </VStack>
              </HStack>
              {/* <PreSaleLine value={20} /> */}
              <Progress
                size="lg"
                isIndeterminate
                colorScheme="pink"
                isAnimated
              />
            </VStack>

            <HStack justifyContent="space-between" width="100%">
              <VStack alignItems="flex-start" spacing={0}>
                <Text
                  color="#A0A0A0"
                  fontSize={{ base: "16px" }}
                  fontWeight={400}
                >
                  Token Distribution
                </Text>
                <Text
                  textTransform="uppercase"
                  color="black"
                  fontWeight={600}
                  lineHeight="150%"
                  fontSize={{ base: "20px" }}
                >
                  10,000,000
                </Text>
              </VStack>
              <VStack alignItems="flex-end" spacing="0">
                <Text
                  color="#A0A0A0"
                  fontSize={{ base: "16px" }}
                  fontWeight={400}
                >
                  Total Raised
                </Text>
                <Text
                  textTransform="uppercase"
                  color="black"
                  fontWeight={600}
                  lineHeight="150%"
                  fontSize={{ base: "20px" }}
                >
                  $1280,320,19
                </Text>
              </VStack>
            </HStack>
            <Button variant="pre-sale">Pre-sale</Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
