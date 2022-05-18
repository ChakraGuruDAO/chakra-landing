import {
  AspectRatio,
  Box,
  Button,
  Circle,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export const CatchCraft = () => {
  return (
    <Box
      bg="dark.100"
      pt="140px"
      pb="68px"
      position="relative"
      overflow="hidden"
    >
      <Container
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <VStack alignItems="flex-start" maxWidth="370px">
          <Heading
            color="white"
            textTransform="uppercase"
            fontWeight={500}
            fontSize="64px"
            lineHeight="120%"
          >
            CATCHING AND CRAFT
          </Heading>
          <Text
            color="white"
            fontWeight={300}
            lineHeight="150%"
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
          <Text
            color="white"
            fontWeight={300}
            lineHeight="150%"
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
          <Button as="a" href="/Hex_Witcher.usdz">
            Try a meta-verse
          </Button>
        </VStack>
        <Box w={{ base: "346px" }} h={{ base: "700px" }} position="relative">
          <Box
            top="-17px"
            bottom="-19px"
            left="0px"
            right="8px"
            zIndex="overlay"
            position="absolute"
            backgroundImage="url(/iphone-frame.png)"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
          />
          <Box
            as="video"
            style={{
              borderRadius: 30,
              maskImage: "url(video-mask.svg)",
              maskPosition: "left top",
              maskRepeat: "no-repeat",
              maskSize: "150%",
            }}
            autoPlay
            w={{ base: "337px" }}
            h={{ base: "655px" }}
            loop
            muted
            src="/ar.mp4"
          />
        </Box>
      </Container>
      <Circle
        bg="brand.100"
        size={{ base: "500px" }}
        filter="blur(900px)"
        position="absolute"
        bottom="-100px"
        left="-100px"
      />
    </Box>
  );
};
