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
import { saleUrl } from "config/links";

export const PreSale = () => {
  return (
    <Box bg="white" py={{ md: "130px", base: "90px" }}>
      <Container>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: "30px" }}>
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Heading
              as="h1"
              fontSize={{ xl: "80px", md: "60px", base: "36px" }}
              fontWeight={500}
              color="brand.100"
            >
              Pre-sale
            </Heading>
            <Text
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ xl: "20px", md: "16px" }}
              fontWeight={300}
              color="black"
              mb={{
                xl: "20px!important",
                md: "20px!important",
                base: "20px!important",
              }}
            >
              The CHAKRA DAO offers two core pools. Variable locking for up to
              twelve months is available for MC and LP staking.
            </Text>
            <PreSaleTimer
              mt={{ xl: "54px", md: "40px" }}
              expireOn={dayjs().add(1, "months").toDate()}
            />
          </VStack>
          <VStack
            alignItems="flex-start"
            borderRadius={{ base: "20px", md: "20px" }}
            borderColor="brand.100"
            borderWidth="2px"
            p={{ xl: "28px", md: "16px", base: "16px" }}
            spacing={{ base: "26px" }}
            divider={<StackDivider borderColor="#A0A0A0" />}
          >
            <HStack justifyContent="space-between" width="100%">
              <HStack>
                <Img src="/chakra.svg" boxSize={{ base: "50px", md: "80px" }} />
                <VStack alignItems="flex-start" spacing={0}>
                  <Text
                    color="#A0A0A0"
                    fontSize={{ xl: "16px", base: "12px" }}
                    fontWeight={400}
                  >
                    Token
                  </Text>
                  <Text
                    textTransform="uppercase"
                    color="black"
                    fontWeight={600}
                    lineHeight="150%"
                    fontSize={{ xl: "28px", base: "20px" }}
                  >
                    Chakra
                  </Text>
                </VStack>
              </HStack>
              <VStack textAlign="right" alignItems="flex-end" spacing="0">
                <Text
                  color="#A0A0A0"
                  fontSize={{ xl: "16px", base: "12px" }}
                  fontWeight={400}
                >
                  Price
                </Text>
                <Text
                  textTransform="uppercase"
                  color="black"
                  fontWeight={600}
                  lineHeight="150%"
                  fontSize={{ xl: "28px", base: "20px" }}
                >
                  $0.1
                </Text>
                <Text
                  color="#A0A0A0"
                  textAlign="right"
                  fontSize={{ xl: "16px", base: "12px" }}
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
                    fontSize={{ xl: "16px", base: "12px" }}
                    fontWeight={400}
                  >
                    Pre-sale
                  </Text>
                  <Text
                    textTransform="uppercase"
                    color="black"
                    fontWeight={600}
                    lineHeight="150%"
                    fontSize={{ xl: "20px", base: "16px" }}
                  >
                    COMING SOON
                  </Text>
                </VStack>
                <VStack alignItems="flex-end" spacing="0">
                  <Text
                    color="#A0A0A0"
                    fontSize={{ xl: "16px", base: "12px" }}
                    fontWeight={400}
                  >
                    Time left
                  </Text>
                  <Text
                    textTransform="uppercase"
                    color="black"
                    fontWeight={600}
                    lineHeight="150%"
                    fontSize={{ xl: "20px", base: "16px" }}
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
                  fontSize={{ xl: "16px", base: "12px" }}
                  fontWeight={400}
                >
                  Token Distribution
                </Text>
                <Text
                  textTransform="uppercase"
                  color="black"
                  fontWeight={600}
                  lineHeight="150%"
                  fontSize={{ xl: "20px", base: "16px" }}
                >
                  10,000,000
                </Text>
              </VStack>
              <VStack alignItems="flex-end" spacing="0">
                <Text
                  color="#A0A0A0"
                  fontSize={{ xl: "16px", base: "12px" }}
                  fontWeight={400}
                >
                  Total Raised
                </Text>
                <Text
                  textTransform="uppercase"
                  color="black"
                  fontWeight={600}
                  lineHeight="150%"
                  fontSize={{ xl: "20px", base: "16px" }}
                >
                  $1280,320,19
                </Text>
              </VStack>
            </HStack>
            <Button as="a" href={saleUrl} variant="pre-sale">
              Pre-sale
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
