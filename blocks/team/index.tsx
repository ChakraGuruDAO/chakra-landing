import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { CEO } from "components/ceo";
import { Teammate } from "components/teammate";
import {
  ArinaKanivets,
  IskanderUsman,
  KhanMinur,
  RavilBerish,
  VadimGill,
  WysiWyg,
  YanShevchenco,
} from "config/team";

export const Team = () => {
  return (
    <Box bg="dark.100" py={{ base: "50px", md: "100px" }}>
      <Container>
        <CEO
          name={RavilBerish.name}
          position={RavilBerish.role}
          site={RavilBerish.site}
          linkedin={RavilBerish.linkedin}
          facebook={RavilBerish.facebook}
          instagram={RavilBerish.instagram}
          twitter={RavilBerish.twitter}
          photo={RavilBerish.photo}
          description={RavilBerish.description}
        />
        <Text
          color="white"
          fontWeight={500}
          fontSize={{ xl: "64px", md: "46px", base: "28px" }}
          mt="50px"
          mb="32px"
        >
          Core team
        </Text>
        <SimpleGrid
          columns={{ xl: 4, md: 3, base: 2 }}
          spacing={{ xl: "30px", md: "20px", base: "16px" }}
        >
          {[
            YanShevchenco,
            ArinaKanivets,
            KhanMinur,
            VadimGill,
            IskanderUsman,
            WysiWyg,
          ].map(({ name, role, site, twitter, photo, description }) => (
            <Teammate
              key={name}
              name={name}
              position={role}
              site={site}
              twitter={twitter}
              photo={photo}
              description={description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
