import { Box, Heading, VStack, Text, BoxProps } from "@chakra-ui/react";

export interface FeatureCardProps extends BoxProps {
  title: string;
  description: string;
  primary?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  primary,
  ...props
}) => {
  return (
    <Box
      width="100%"
      borderRadius="20px"
      bg={primary ? "brand.100" : "white"}
      backgroundImage={
        primary
          ? {
              xl: "url(/chakra-bg.svg)",
              md: "url(/chakra-bg-md.svg)",
              sm: "url(/chakra-bg-sm.svg)",
            }
          : undefined
      }
      backgroundRepeat="no-repeat"
      backgroundSize={{
        xl: "60%",
        md: "80%",
      }}
      backgroundPosition={{
        xl: "bottom 0 right 0",
        md: "bottom 0 right 0px",
      }}
      px={{ md: "35px", base: "24px" }}
      py={{ md: "50px", base: "24px" }}
      textAlign="center"
      {...props}
    >
      <VStack>
        <Heading
          as="h3"
          fontWeight={500}
          textTransform="uppercase"
          fontSize={{ xl: "40px", md: "32px", base: "28px" }}
          color={primary ? "white" : "black"}
          mb="12px"
        >
          {title}
        </Heading>
        <Text
          fontSize={{ xl: "20px", md: "16px", base: "16px" }}
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
