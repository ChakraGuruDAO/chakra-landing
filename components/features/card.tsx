import { Box, Heading, VStack, Text } from "@chakra-ui/react";

export interface FeatureCardProps {
  title: string;
  description: string;
  primary?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  primary,
}) => {
  return (
    <Box
      width="100%"
      borderRadius="20px"
      bg={primary ? "brand.100" : "white"}
      backgroundImage={primary ? "url(/chakra-bg.svg)" : undefined}
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundPosition="right"
      px="35px"
      py="50px"
      textAlign="center"
    >
      <VStack>
        <Heading
          as="h3"
          fontWeight={500}
          textTransform="uppercase"
          fontSize="40px"
          color={primary ? "white" : "black"}
          mb="12px"
        >
          {title}
        </Heading>
        <Text
          fontSize="20px"
          lineHeight="150%"
          fontWeight={300}
          color={primary ? "white" : "black"}
        >
          {description}
        </Text>
      </VStack>
    </Box>
  );
};
