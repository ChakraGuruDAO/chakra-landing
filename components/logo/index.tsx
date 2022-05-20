import { Img, Text, HStack } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <HStack gap={{ base: "8px", md: "12px" }} userSelect="none">
      <Img src="/chakra.svg" boxSize={{ base: "45px", md: "60px" }} />
      <Text
        color="brand.100"
        fontSize={{ base: "24px", md: "30px" }}
        fontWeight={400}
        ml="0"
        textTransform="uppercase"
      >
        Chakra
      </Text>
    </HStack>
  );
};
