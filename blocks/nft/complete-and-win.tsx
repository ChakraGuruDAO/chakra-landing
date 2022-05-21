import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Boys } from "components/boys";

export const CompeteWin = () => {
  const boysSize = useBreakpointValue<"sm" | "md" | "xl">({
    base: "sm",
    md: "md",
    xl: "xl",
  });
  return (
    <Box bg="dark.100" position="relative">
      <Container
        display="flex"
        justifyContent={{ xl: "flex-end", base: "flex-start" }}
        pt={{ base: 0, xl: 20 }}
        alignItems={{ base: "flex-start" }}
        height={{ base: "700px", xl: "800px" }}
        textAlign="left"
      >
        <Boys
          position="absolute"
          width={{ base: "100%" }}
          height={{ base: "100%" }}
          top="0"
          bottom="0"
          left="0"
          right="0"
          size={boysSize}
        />

        <VStack
          maxWidth={{ base: "430px", xl: "530px" }}
          justifySelf={{ base: "flex-start", md: "center" }}
          zIndex="overlay"
          gap={{ lg: 1 }}
          alignItems={{ xl: "flex-start" }}
          color={{ xl: "teal.300", base: "teal.300" }}
          px={12}
          py={8}
          position="relative"
          transition="all 0.25s ease 0s"
          boxShadow={`var(--chakra-colors-blue-800) 0 0 1px`}
          _hover={{
            boxShadow: `var(--chakra-colors-blue-800) 0 0 var(--chakra-sizes-8)`,
          }}
          borderRadius={12}
        >
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            bg="blue.900"
            borderRadius={12}
            border="1px solid "
            opacity="0.2"
          />
          <Heading
            textTransform="uppercase"
            mt={{ base: 32, md: 0 }}
            fontWeight={500}
            fontSize={{ xl: "64px", md: "46px", base: "26px" }}
            lineHeight="120%"
            zIndex={1000}
            filter={{ lg: "blur(0.1px)" }}
          >
            Fight to win
          </Heading>
          <Text
            fontWeight={300}
            fontSize={{ xl: "20px", base: "16px" }}
            lineHeight="150%"
            zIndex={1000}
            color={{ base: "blue.100" }}
            filter={{ lg: "blur(0.1px)" }}
          >
            Immersion in the ecosystem goes through Game-Fi mechanisms. Fight
            and defeat other players. Join clans and take part in quests.
          </Text>
          <Text
            fontWeight={300}
            fontSize={{ xl: "20px", base: "16px" }}
            lineHeight="150%"
            zIndex={1000}
            color={{ base: "blue.100" }}
            filter={{ lg: "blur(0.1px)" }}
          >
            KARMA includes several fight modes PvP and PvE. Players use the own
            collection of Game-elements with their own characteristics and
            abilities.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
