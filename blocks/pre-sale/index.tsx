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
              KARMA is a cross-platform collectible card game based on augmented
              reality (AR) technology. She uses mobile devices with GPS to find,
              catch, upgrade and fight virtual characters. They look like they
              are in the player&apos;s real world.
            </Text>

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
              KARMA Token is Game-Ecosystem utility token in Chakra Guru DAO.
              Participate in the Pre Sale. You can purchase KARMA tokens as an
              early adopter of our project Chakra Guru DAO. The receipt of the
              tokens will be claimed out according to the unlock map.
            </Text>
            <Timer expireOn={saleStartAt} />
            {/* <PreSaleTimer
              mt={{ xl: "54px", md: "40px" }}
              expireOn={dayjs().add(1, "months").toDate()}
            /> */}
          </VStack>
          <Box>
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
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
