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
          fontSize={{ xl: "64px", md: "40px", base: "28px" }}
          fontWeight={500}
          mb={{ xl: "50px" }}
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
              description="Targeted meta-stations with the function of generating and distributing content and the ability to customize the interaction."
            />
            <FeatureCard
              title="Commerce"
              flexGrow={1}
              description="Targeted meta-stations with the function of generating and distributing content and the ability to customize the interaction."
            />
          </Stack>
          <Stack
            flexDirection={{ xl: "row", md: "column", base: "column" }}
            gap={{ xl: "30px", md: "20px", base: "12px" }}
            mt={{ md: "0!important" }}
          >
            <FeatureCard
              title="Creator"
              description="Create content for the metaverse and get a percentage of the distribution received for non-profits."
            />
            <FeatureCard
              title="Investor"
              description="By purchasing zones in the metaverse, you receive commissions for activities in your territory"
            />

            <FeatureCard
              title="Ambassador"
              description="We will discuss responsibilities and financial incentives with each potential ambassador"
            />
          </Stack>
        </Stack>
        {/* <VStack
          spacing={{ xl: "30px", md: "30px" }}
          flexDirection={{ xl: "column", md: "row" }}
        >
          <SimpleGrid columns={{ xl: 2, md: 1 }} autoRows spacing="30px">
            <FeatureCard
              primary
              title="Game"
              description="Targeted meta-stations with the function of generating and distributing content and the ability to customize the interaction."
            />
            <FeatureCard
              title="Commerce"
              description="Targeted meta-stations with the function of generating and distributing content and the ability to customize the interaction."
            />
          </SimpleGrid>
          <SimpleGrid columns={{ xl: 3, md: 1 }} spacing="30px">
            <FeatureCard
              title="Creator"
              description="Create content for the metaverse and get a percentage of the distribution received for non-profits."
            />
            <FeatureCard
              title="Investor"
              description="By purchasing zones in the metaverse, you receive commissions for activities in your territory"
            />
            <FeatureCard
              title="Ambassador"
              description="We will discuss responsibilities and financial incentives with each potential ambassador"
            />
          </SimpleGrid>
        </VStack> */}
      </Container>
    </Box>
  );
};
