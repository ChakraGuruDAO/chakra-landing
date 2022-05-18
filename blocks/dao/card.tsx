import { Box, Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { PRE_SALE_LINK } from "config/links";

export interface DAOCardProps {}

export const DAOCard: React.FC<DAOCardProps> = () => {
  return (
    <Box
      borderRadius="20px"
      bg="pink.100"
      px="32px"
      height={{ xl: "470px", md: "300px" }}
      display="flex"
      alignItems="center"
      backgroundImage="url(/dao-bg.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="top 100% right -36%"
      backgroundSize={{ xl: "50%", md: "60%" }}
    >
      <SimpleGrid columns={2}>
        <VStack textAlign="center">
          <Text
            color="white"
            fontSize={{ xl: "64px", md: "32px" }}
            fontWeight={500}
          >
            DAO
          </Text>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", md: "16px" }}
            marginBottom={{ xl: "50px", md: "0px" }}
          >
            Through ownership and rewarding merit, metaverse are now governed by
            the players. Innovative MetaFi economics reward avatars for their
            action.
          </Text>
          <Button as="a" href={PRE_SALE_LINK} variant="white">
            Join the pre-sale
          </Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};
