import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FeatureCard } from "./card";

interface FeaturesProps {}

export const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <Box
      py={{ xl: "120px", md: "90px", base: "60px" }}
      pb={{ xl: "80px", base: "60px" }}
    >
      <Container textAlign="center" mb="50px">
        <Heading
          fontSize={{ xl: "64px", md: "40px", base: "22px" }}
          fontWeight={500}
          mb={{ base: "50px" }}
          lineHeight="120%"
        >
          We&apos;re building the&nbsp;
          <Text as="span" color="brand.100">
            metaverse
          </Text>
          &nbsp;by empowering people to be a part of it.
        </Heading>
      </Container>
      <Container>
        <Stack
          gap={{ xl: "30px", md: "20px", base: "12px" }}
          flexDirection={{ xl: "column", md: "row", base: "column" }}
        >
          <Stack
            direction={{ xl: "row", md: "column", base: "column" }}
            spacing={{ xl: "30px", md: "20px", base: "12px" }}
          >
            <FeatureCard
              primary
              title="Game"
              flexGrow={1}
              description="Through games, we invoke the natural inclinations of users to compete, collaborate, and achieve to immerse themselves in the Metaverse."
            />
            <FeatureCard
              title="Commerce"
              flexGrow={1}
              description="Targeted Meta-Stations with the function of generating and distributing Content and the ability to customize the interaction."
            />
          </Stack>
          <Stack
            flexDirection={{ xl: "row", md: "column", base: "column" }}
            gap={{ xl: "30px", md: "20px", base: "12px" }}
            spacing={{ base: 0 }}
            mt={{ md: "0!important" }}
          >
            <FeatureCard
              title="Creator"
              description="Create content to the Metaverse and get a percent of the released fees and taxes."
            />
            <FeatureCard
              title="Investor"
              description="Buy a Zone in the Metaverse and earn income rewards for providing"
            />

            <FeatureCard
              title="Ambassador"
              description="Convenient social system for managing communities - Connect-to-Earn"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
