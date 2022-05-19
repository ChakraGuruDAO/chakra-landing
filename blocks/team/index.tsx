import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { CEO } from "components/ceo";
import { Teammate } from "components/teammate";

export const Team = () => {
  return (
    <Box bg="dark.100" py={{ base: "50px", md: "150px" }}>
      <Container>
        <CEO
          name="Ravil Berish"
          position="CEO/Founder"
          twitter="#"
          telegram="#"
          photo="/ravil-ceo.png"
          description="Behind the scenes there are more than 20 game designers, game/blockchain developers and marketers.Behind the scenes there are more than 20 game designers, game/blockchain developers and marketers."
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
          <Teammate
            name="Yan Shevchenco"
            position="Chif Game Office"
            twitter="#"
            telegram="#"
            photo="/yan-shevchenco.png"
            description="Game Designer, developer games and projects, founder and CEO of GD Forge and Fair Games"
          />
          <Teammate
            name="Arina Kanivets"
            position="UI/UX designer"
            twitter="#"
            telegram="#"
            photo="/arina-kanivets.png"
            description="Web/mobile designer, international market experience and team building"
          />
          <Teammate
            name="Khan Minur"
            position="Business Developer"
            twitter="#"
            telegram="#"
            photo="/khan-minur.png"
            description="Developered processes in business and between them.  "
          />
          <Teammate
            name="Vadim Gill"
            position="CTO"
            twitter="#"
            telegram="#"
            photo="/vadim-gill.png"
            description="Artificial intelligence creator,"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};
