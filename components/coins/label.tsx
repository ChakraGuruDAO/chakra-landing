import { Box, BoxProps, HStack, Text, StackProps } from "@chakra-ui/react";

interface LabelProps extends StackProps {
  value: string;
  color: BoxProps["bg"];
}

export const CoinLabel: React.FC<LabelProps> = ({
  color,
  value,
  ...stackProps
}) => {
  return (
    <HStack
      spacing={{ base: "16px", md: "16px" }}
      position="relative"
      textAlign="left"
      maxW={{ base: "100%", md: "300px" }}
      py={{ base: "10px" }}
      {...stackProps}
    >
      <Box
        width="9px"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        height="100%"
        borderTopLeftRadius="10px"
        background={color}
        borderBottomLeftRadius="10px"
      />
      <Text
        color="white"
        fontSize={{ base: "16px", md: "20px" }}
        fontWeight={300}
      >
        {value}
      </Text>
    </HStack>
  );
};
