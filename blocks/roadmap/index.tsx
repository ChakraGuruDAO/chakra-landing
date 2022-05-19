import {
  Container,
  Box,
  Text,
  Heading,
  List,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { RoadmapComponent } from "components/roadmap";

export const Roadmap = () => {
  return (
    <Box bg="dark.100" pb="140px">
      <Container>
        <Heading
          as="h2"
          textAlign="center"
          color="white"
          fontSize={{ xl: "64px", md: "46px", base: "28px" }}
          fontWeight={500}
          mb="64px"
        >
          Nothing but&nbsp;
          <Text color="brand.100" as="span">
            excitement ahead.
          </Text>
        </Heading>

        <RoadmapComponent
          items={[
            {
              title: "2022 Q2",
              align: "left",
              content: (
                <UnorderedList color="white">
                  <ListItem>Born Idea</ListItem>
                  <ListItem>Signed an agreement with GDForge</ListItem>
                  <ListItem>Team Formation</ListItem>
                  <ListItem>White & Lite Paper</ListItem>
                  <ListItem>Hard Cap - 200.000 $</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2022 Q3",
              align: "right",
              marginTop: { base: "20px!important" },
              content: (
                <UnorderedList color="white">
                  <ListItem>Concept & Design Doc Karma prod.</ListItem>
                  <ListItem>Signed an agreement with WaitFrame</ListItem>
                  <ListItem>NFT Launchpad - 800.000$</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2022 Q4",
              align: "left",
              content: (
                <UnorderedList color="white">
                  <ListItem>Genetic Avatar Launchpad.</ListItem>
                  <ListItem>Priavte Sale - 5-8 kk$</ListItem>
                  <ListItem>Alpha Verse Karma prod.</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2023 Q1",
              align: "right",
              content: (
                <UnorderedList color="white">
                  <ListItem>IDO Chakra Token - 1kk$</ListItem>
                  <ListItem>Beta-vers Karma prod.</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2023 Q2",
              align: "left",
              content: (
                <UnorderedList color="white">
                  <ListItem>Public relise Karma game.</ListItem>
                  <ListItem>Public Relise Chakra Token</ListItem>
                </UnorderedList>
              ),
            },
          ]}
        />
      </Container>
    </Box>
  );
};
