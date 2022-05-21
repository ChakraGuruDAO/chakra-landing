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
          textAlign={{ base: "center", md: "left" }}
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
            <Text as="span" color="brand.100">
              Minting
            </Text>{" "}
            &{" "}
            <Text as="span" color="pink.100">
              Crafting
            </Text>
          </Heading>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", md: "16px" }}
            lineHeight="150%"
            mb="24px!important"
          >
            Move-and-Go and collect Meta-Objects. They are located all over the
            world. With your camera, you can catch and craft it for your
            Collection.
          </Text>
          <Text
            color="white"
            fontWeight={300}
            fontSize={{ xl: "20px", md: "16px" }}
            lineHeight="150%"
            mb="24px!important"
          >
            Explore your world in a new way, find hidden heroes and then sell
            them on the market. Upgrade your characters, their weapons and
            skills. It is available with the help of{" "}
            <Text as="span" color="pink.500">
              Augmented Reality (AR) technology
            </Text>
          </Text>
          <Box display={{ base: "none", lg: "flex" }} flexDirection="column">
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
                minW={{ base: 20, lg: 60 }}
                justifyContent="space-between"
                pl={4}
              >
                <FaArrowLeft size={32} color="var(--chakra-colors-brand-200)" />
                <Text
                  fontSize={{ base: "large", lg: "2xl" }}
                  fontWeight="black"
                >
                  TRY IT NOW
                </Text>
              </HStack>
            </HStack>
          </Box>

          <Button
            alignSelf={{ base: "center", lg: "flex-start" }}
            as="a"
            rel="ar"
            colorScheme="pink"
            display={{ base: "block", lg: "none" }}
            href="/model.usdz"
          >
            TRY IT NOW
          </Button>
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
