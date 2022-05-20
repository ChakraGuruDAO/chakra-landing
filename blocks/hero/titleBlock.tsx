import { Button, Heading, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export interface TitleBlockProps {
  presaleUrl: string;
}

export const TitleBlock: React.FC<TitleBlockProps> = ({ presaleUrl }) => {
  return (
    <VStack direction="column" textAlign="center" maxW="70rem">
      <Heading
        lineHeight="110%"
        as="h1"
        fontSize={{ base: "48px", md: "64px", xl: 120 }}
        color="white"
        fontWeight={500}
        mb="20px"
      >
        Together, we build the&nbsp;
        <Text
          as="span"
          display={{ base: "block", sm: "block", lg: "inline" }}
          color="brand.100"
          wordBreak="break-word"
        >
          AR-Metaverse
        </Text>
      </Heading>
      <Text
        color="white"
        fontSize={{ xl: "20px", md: "20px", base: "16px" }}
        maxW={{ xl: "560px", base: "90%" }}
      >
        We are a decentralized autonomous organization whose mission is to
        aggregate existing realities. Let&apos;s build the metaverse by
        empowering people to be a part of it.
      </Text>
      <HStack mt="20px!important">
        <Button
          as="a"
          href={presaleUrl}
          colorScheme="pink"
          variant="solid"
          rightIcon={<ArrowForwardIcon />}
          height={{ base: "30px" }}
        >
          Join the pre-sale
        </Button>
        <Button
          as="a"
          href={presaleUrl}
          colorScheme="green"
          variant="solid"
          height={{ base: "30px" }}
        >
          Documentation
        </Button>
      </HStack>
    </VStack>
  );
};
