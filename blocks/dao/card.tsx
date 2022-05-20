import { Box, Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { saleUrl } from "config/links";

export interface DAOCardProps {}

export const DAOCard: React.FC<DAOCardProps> = () => {
  return (
    <Box
      borderRadius="20px"
      bg="pink.100"
      px="32px"
      height={{ xl: "470px", md: "300px", base: "469px" }}
      display="flex"
      alignItems={{
        base: "space-around",
        md: "center",
      }}
      backgroundImage={{
        base: "url(/dao-bg-base.svg)",
        md: "url(/dao-bg.svg)",
      }}
      backgroundRepeat="no-repeat"
      backgroundPosition={{
        base: "bottom -2px left 0",
        md: "top 100% right -80%",
        lg: "top 100% right -28%",
      }}
      padding={{
        base: "35px",
        md: undefined,
      }}
      backgroundSize={{ md: "70%", lg: "60%" }}
    >
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
      >
        <VStack
          textAlign="center"
          alignSelf={{ base: "flex-start", md: undefined }}
        >
          <Text
            color="white"
            fontSize={{ xl: "64px", md: "32px", base: "28px" }}
            fontWeight={500}
          >
            DAO
          </Text>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", base: "16px" }}
            marginBottom={{ xl: "50px", base: "0px" }}
          >
            Through ownership and rewarding merit, metaverse are now governed by
            the players. Innovative MetaFi economics reward avatars for their
            action.
          </Text>
          <Button as="a" href={saleUrl} variant="white">
            Join the pre-sale
          </Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};
