import {
  VStack,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
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
  const borderColor = useColorModeValue("blue.200", "blue.300");

  return (
    <VStack spacing={{ base: 4 }}>
      <Box
        minW={{ base: 20, md: 20, xl: 28 }}
        minH={{ base: 24, md: 24, xl: 28 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth={2}
        borderColor={borderColor}
        borderRadius={{ base: "12px", md: "12px", xl: "20px" }}
        textAlign="center"
      >
        <Text
          fontSize={{ base: "32px", md: "24px", xl: "54px" }}
          fontWeight={500}
        >
          {formattedValue}
        </Text>
      </Box>
      <Text
        fontSize={{ base: "12px", md: "8px", xl: "16px" }}
        textTransform="uppercase"
        fontWeight="medium"
      >
        {title}
      </Text>
    </VStack>
  );
};
