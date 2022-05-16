import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FeatureCard } from "./card";

interface FeaturesProps {}

export const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <Box py="200px">
      <Container textAlign="center" mb="50px">
        <Heading fontSize="64px" fontWeight={500} lineHeight="120%">
          We&apos;re building the&nbsp;
          <Text as="span" color="brand.100">
            metaverse
          </Text>
          &nbsp;by empowering people to be a part of it.
        </Heading>
      </Container>
      <Container>
        <VStack spacing="30px">
          <SimpleGrid columns={2} spacing="30px">
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
          <SimpleGrid columns={3} spacing="30px">
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
        </VStack>
      </Container>
    </Box>
  );
};
