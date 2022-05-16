import { Box, Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export interface DAOCardProps {}

export const DAOCard: React.FC<DAOCardProps> = () => {
  return (
    <Box
      borderRadius="20px"
      bg="pink.100"
      px="32px"
      minHeight="470px"
      display="flex"
      alignItems="center"
      backgroundImage="url(/dao-bg.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="100% 1px"
      backgroundSize="contain"
    >
      <SimpleGrid columns={2}>
        <VStack textAlign="center">
          <Text color="white" fontSize="64px" fontWeight={500}>
            DAO
          </Text>
          <Text
            color="white"
            fontWeight={300}
            fontSize="20px"
            marginBottom="50px!important"
          >
            Through ownership and rewarding merit, metaverse are now governed by
            the players. Innovative MetaFi economics reward avatars for their
            action.
          </Text>
          <Button variant="white">Join the pre-sale</Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};
