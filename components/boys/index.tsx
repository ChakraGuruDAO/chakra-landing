import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

export interface BoysProps {
  startScroll?: number;
  endScroll: number;
}

export const Boys: React.FC<BoysProps> = ({ startScroll = 0, endScroll }) => {
  const startAndEnd = {
    startScroll,
    endScroll,
  };

  return (
    <Box height={endScroll * 3 + "px"} bg="#06071F" overflow="hidden">
      <Container justifyContent="space-between">
        <Parallax startScroll={0} translateY={[0, 200]} endScroll={900}>
          <Box maxWidth="370px">
            <Heading
              color="brand.100"
              textTransform="uppercase"
              fontWeight={500}
              fontSize="64px"
              lineHeight="120%"
            >
              CATCHING AND CRAFT
            </Heading>
            <Text color="white" fontWeight={300} lineHeight="150%">
              While modifying the metaverse with the Karma dApp, hunt for rare
              ar-nft characters and keep moving 2 earn
            </Text>
          </Box>
        </Parallax>
        <Parallax startScroll={0} translateY={[0, -450]} endScroll={900}>
          <Box maxWidth="350px" float="right">
            <Text color="white" fontWeight={300} lineHeight="150%">
              Any characters, attributes and elements of the game are
              non-fungible tokens with their own archetype and characteristics
            </Text>
          </Box>
        </Parallax>
      </Container>
    </Box>
  );
};
