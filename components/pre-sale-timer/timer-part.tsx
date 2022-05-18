import { VStack, Box, Text } from "@chakra-ui/react";
import { useMemo } from "react";

export interface TimerPartProps {
  title: string;
  value: number;
}

export const TimerPart: React.FC<TimerPartProps> = ({ title, value }) => {
  const formattedValue = useMemo(
    () => (value >= 0 && value <= 9 ? `0${value}` : value),
    [value]
  );

  return (
    <VStack spacing={{ base: "13px" }}>
      <Box
        minW={{ base: "120px" }}
        minH={{ base: "130px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth="2px"
        borderColor="brand.100"
        borderRadius="20px"
        textAlign="center"
      >
        <Text fontSize={{ base: "54px" }} fontWeight={500} color="brand.100">
          {formattedValue}
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
