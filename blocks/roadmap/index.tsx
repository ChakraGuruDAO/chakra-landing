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
          Roadmap.&nbsp;
          <Text color="brand.100" as="span">
            Let&apos;s GO!
          </Text>
        </Heading>

        <RoadmapComponent
          items={[
            {
              title: "2022 April",
              align: "left",
              content: (
                <UnorderedList color="white">
                  <ListItem>Born first AR Idea</ListItem>
                  <ListItem>Move-to-Earn AR Concept study</ListItem>
                  <ListItem>Search for game developers</ListItem>
                  <ListItem>Market analysis</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2022 May",
              align: "right",
              marginTop: { lg: "-100px!important" },
              content: (
                <UnorderedList color="white">
                  <ListItem>Core team building</ListItem>
                  <ListItem>Marketing development program</ListItem>
                  <ListItem>Whitepaper and documentation</ListItem>
                  <ListItem>Landing page</ListItem>
                  <ListItem>Pre-Sale dashboard</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2022 June",
              align: "left",
              marginTop: { lg: "-100px!important" },
              content: (
                <UnorderedList color="white">
                  <ListItem>Pre-sale Fundraising</ListItem>
                  <ListItem>Signed an agreement with Game Studio</ListItem>
                  <ListItem>Farming contracts</ListItem>
                  <ListItem>Solidity Team Formation</ListItem>
                  <ListItem>
                    Starting the development process of game design and script
                  </ListItem>
                  <ListItem>Marketing Team Formation</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2022 Q3",
              align: "right",
              marginTop: { lg: "-100px!important" },
              content: (
                <UnorderedList color="white">
                  <ListItem>Concept & Design Doc KARMA</ListItem>
                  <ListItem>Community building</ListItem>
                  <ListItem>
                    Signed an agreement with Blockchain Studio
                  </ListItem>
                  <ListItem>Art illustrations + NFT generation</ListItem>
                  <ListItem>NFT Launchpad</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2022 Q4",
              align: "left",
              marginTop: { lg: "-100px!important" },
              content: (
                <UnorderedList color="white">
                  <ListItem>Meta-Elements development</ListItem>
                  <ListItem>Meta-System tech concept</ListItem>
                  <ListItem>Private Sale $CHAKRA</ListItem>
                  <ListItem>Alpha Release KARMA</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2023 Q1",
              align: "right",
              marginTop: { lg: "-100px!important" },
              content: (
                <UnorderedList color="white">
                  <ListItem>IDO $CHAKRA Token</ListItem>
                  <ListItem>Zone Launchpad (NFT)</ListItem>
                  <ListItem>First DEX-CEX Listing</ListItem>
                  <ListItem>Farming contract $CHAKRA</ListItem>
                  <ListItem>Security Audit</ListItem>
                  <ListItem>Beta Release KARMA</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2023 Q2",
              align: "left",
              marginTop: { lg: "-100px!important" },
              content: (
                <UnorderedList color="white">
                  <ListItem>Beta Release CHAKRA</ListItem>
                  <ListItem>CHAKRA Dashboard release</ListItem>
                  <ListItem>Achievement System</ListItem>
                  <ListItem>Quest System</ListItem>
                </UnorderedList>
              ),
            },
            {
              title: "2023 Q3",
              align: "right",
              marginTop: { lg: "-100px!important" },
              content: (
                <UnorderedList color="white">
                  <ListItem>Public Release CHAKRA</ListItem>
                  <ListItem>Multichain Support</ListItem>
                  <ListItem>Integration Social-Fi Systems</ListItem>
                  <ListItem>Game tournaments</ListItem>
                </UnorderedList>
              ),
            },
          ]}
        />
      </Container>
    </Box>
  );
};
