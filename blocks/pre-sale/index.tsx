import {
  Container,
  Box,
  SimpleGrid,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { PreSaleTimer } from "components/pre-sale-timer";
import { saleUrl } from "config/links";
import { TickerBlock } from "./tickerBlock";
import {
  fromSymbol,
  hardCapToken,
  saleEndAt,
  saleStartAt,
  softCapToken,
  tokenName,
  tokenPrice,
  tokenSymbol,
} from "config/presale";
import { Timer } from "components/timer";

export const PreSale = () => {
  return (
    <Box bg="white" py={{ base: 12, md: 20, lg: 32, xl: 40 }}>
      <Container>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: "30px" }}
          gap={{ base: 10, md: 4, lg: 20 }}
        >
          <VStack alignItems={{ base: "center", lg: "flex-start" }}>
            <Heading
              as="h1"
              fontSize={{ base: 48, md: 60, xl: 80 }}
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
            <Timer expireOn={saleStartAt} />
            {/* <PreSaleTimer
              mt={{ xl: "54px", md: "40px" }}
              expireOn={dayjs().add(1, "months").toDate()}
            /> */}
          </VStack>
          <TickerBlock
            tokenName={tokenName}
            tokenSymbol={tokenSymbol}
            saleStartAt={saleStartAt}
            saleEndAt={saleEndAt}
            tokenPrice={tokenPrice}
            fromSymbol={fromSymbol}
            softCapToken={softCapToken}
            hardCapToken={hardCapToken}
            saleUrl={saleUrl}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};
