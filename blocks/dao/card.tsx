import { Box, Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
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
        <Flex
          flexDirection="column"
          textAlign="center"
          justifyContent="center"
          gap={{ base: 6, md: 2, lg: 6 }}
          alignSelf={{ base: "flex-start", md: undefined }}
        >
          <Text
            color="white"
            fontSize={{ xl: "64px", md: "32px", base: "28px" }}
            fontWeight={500}
            lineHeight={{ xl: "64px", md: "32px", base: "28px" }}
          >
            DAO
          </Text>

          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", base: "16px" }}
          >
            We are creating the Next Generation of the digital world, where
            everyone can be part of a decentralized autonomous organization
            (DAO) based on rules and standards.
          </Text>

          <Box>
            <Button as="a" href={saleUrl} variant="white">
              Join the pre-sale
            </Button>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
