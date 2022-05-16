import { Box, BoxProps, Circle, Heading, Text, VStack } from "@chakra-ui/react";

export interface LineProps extends BoxProps {
  title: string;
  description: string;
  circleProps: React.ComponentProps<typeof Circle>;
  textBlockProps?: React.ComponentProps<typeof VStack>;
}

export const Line: React.FC<LineProps> = ({
  title,
  description,
  width,
  height,
  circleProps,
  textBlockProps,
  ...boxProps
}) => {
  return (
    <Box position="relative" width={width} height={height} {...boxProps}>
      <VStack
        textAlign="left"
        alignItems="flex-start"
        width="fit-content"
        position="absolute"
        right="150%"
        transform="translate(145%)"
        bottom="100%"
        {...textBlockProps}
      >
        <Heading
          as="h4"
          fontWeight={500}
          textTransform="uppercase"
          color="white"
          fontSize="2.5rem"
          lineHeight="120%"
        >
          {title}
        </Heading>
        <Text
          fontSize="1.25rem"
          fontWeight={300}
          color="white"
          mt="0px !important"
        >
          {description}
        </Text>
      </VStack>
      <Circle
        position="absolute"
        size={{ base: "17px" }}
        borderWidth="3px"
        borderColor="white"
        {...circleProps}
      />
    </Box>
  );
};
