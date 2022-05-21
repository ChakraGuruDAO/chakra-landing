import { Button, Heading, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export interface TitleBlockProps {
  presaleUrl: string;
  docsUrl: string;
}

export const TitleBlock: React.FC<TitleBlockProps> = ({
  presaleUrl,
  docsUrl,
}) => {
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
          AR Metaverse
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
        <NextLink href={presaleUrl} passHref>
          <Button
            as="a"
            target="_blank"
            colorScheme="pink"
            variant="solid"
            rightIcon={<ArrowForwardIcon />}
            size="lg"
          >
            Join the pre-sale
          </Button>
        </NextLink>

        <NextLink href={docsUrl} passHref>
          <Button
            as="a"
            target="_blank"
            colorScheme="blue"
            textColor="blue.200"
            variant="outline"
            size="lg"
            _hover={{
              textColor: "whiteAlpha.900",
            }}
          >
            White paper
          </Button>
        </NextLink>
      </HStack>
    </VStack>
  );
};
