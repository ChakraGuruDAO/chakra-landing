import {
  AspectRatio,
  Box,
  Button,
  Circle,
  Container,
  Heading,
  HStack,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

export const CatchCraft = () => {
  return (
    <Box
      bg="dark.100"
      pt={{ xl: "100px", md: "100px", base: "60px" }}
      pb={{ xl: "68px", md: "100px", base: "60px" }}
      position="relative"
      overflow="hidden"
      bgImage="url(/catch-and-craft-bg.jpg)"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Container
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <VStack
          alignItems="flex-start"
          maxWidth={{ xl: "370px", md: "270px", base: "100%" }}
          mb={{ base: "60px", md: 0 }}
        >
          <Heading
            color="white"
            textTransform="uppercase"
            fontWeight={500}
            mb={{ base: "20px", md: "0" }}
            width={{ base: "100%", md: "initial" }}
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ xl: "64px", md: "40px", base: "28px" }}
            lineHeight="120%"
          >
            CATCHING AND CRAFT
          </Heading>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", md: "16px" }}
            lineHeight="150%"
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", md: "16px" }}
            lineHeight="150%"
            mb="24px!important"
          >
            While modifying the metaverse with the Karma dApp, hunt for rare
            ar-nft characters and keep moving 2 earn
          </Text>
          <Box display={{ base: "none", md: "flex" }} flexDirection="column">
            {/* <Text
              fontSize={{ base: "20px" }}
              color="brand.100"
              fontWeight={500}
              mb="20px"
            >
              Try a meta-verse
            </Text> */}
            <HStack>
              <Img src="/qrcode.svg" boxSize={{ base: "100px" }} />
              <HStack
                color="brand.200"
                minW={60}
                justifyContent="space-between"
                pl={10}
              >
                <FaArrowLeft size={32} color="var(--chakra-colors-brand-200)" />
                <Text fontSize="2xl" fontWeight="black">
                  TRY IT NOW
                </Text>
              </HStack>
            </HStack>
          </Box>

          {/* <Button
            alignSelf={{ base: "center", lg: "flex-start" }}
            as="a"
            colorScheme="pink"
            display={{ base: "block", md: "none" }}
            href="/Hex_Witcher.usdz"
          >
            Try a meta-verse
          </Button> */}
        </VStack>
        <VStack
          w={{ xl: "346px", md: "300px", base: "250px" }}
          h={{ xl: "700px", md: "500px", base: "450px" }}
          position="relative"
        >
          <Box
            top={{ xl: "-5px", md: "-6px", base: "3px" }}
            bottom={{ xl: "0px", md: "-15px", base: "0px" }}
            left={{ xl: "4px", md: "20px", base: "15px" }}
            right={{ xl: "3px", md: "5px", base: "10px" }}
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
            playsInline
            w={{ xl: "337px", md: "229px", base: "200px" }}
            h={{ md: "500px", xl: "655px", base: "445px" }}
            loop
            muted
            src="/ar.mp4"
          />
        </VStack>
      </Container>
    </Box>
  );
};
