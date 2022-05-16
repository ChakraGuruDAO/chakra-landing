import { VStack, Box, Text } from "@chakra-ui/react";

export interface TimerPartProps {
  title: string;
  value: number;
}

export const TimerPart: React.FC<TimerPartProps> = ({ title, value }) => {
  return (
    <VStack spacing={{ base: "13px" }}>
      <Box
        minW={{ base: "120px" }}
        minH={{ base: "130px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth="1px"
        borderColor="brand.100"
        borderRadius="20px"
        textAlign="center"
      >
        <Text fontSize={{ base: "54px" }} fontWeight={500} color="brand.100">
          {value}
        </Text>
      </Box>
      <Text
        fontSize={{ base: "16px" }}
        textTransform="uppercase"
        fontWeight={500}
        color="brand.100"
      >
        {title}
      </Text>
    </VStack>
  );
};
