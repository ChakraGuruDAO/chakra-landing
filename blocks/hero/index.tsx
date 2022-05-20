import {
  Box,
  VStack,
  Flex,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  discordUrl,
  githubUrl,
  mediumUrl,
  rootUrl,
  saleUrl,
  telegramUrl,
  twitterUrl,
} from "config/links";
import { SceneScroll, SceneScrollNext } from "components/webgl-hero";
import { TitleBlock } from "./titleBlock";
import { HeaderBlock } from "./headerBlock";

export const Hero = () => {
  const sceneRadius = useBreakpointValue<[number, number]>({ base: [14, 800] });
  const sceneTube = useBreakpointValue<[number, number]>({ base: [200, 800] });
  const sceneSize = useBreakpointValue<[number, number]>({ base: [4, 40] });
  const sceneRadialSegments = useBreakpointValue<[number, number]>({
    base: [600, 1000],
  });

  return (
    <Flex
      bgGradient="linear( to-b, dark.100, brand.100)"
      height="110vh"
      position="relative"
      flexDirection="column"
      alignItems="center"
    >
      <VStack
        height="100vh"
        zIndex={1}
        alignItems="space-between"
        maxWidth={{ base: "350px", md: "620px", lg: "960px", xl: "1170px" }}
      >
        <Box pt={{ base: "20px" }}>
          <HeaderBlock
            rootUrl={rootUrl}
            mediumUrl={mediumUrl}
            githubUrl={githubUrl}
            twitterUrl={twitterUrl}
            discordUrl={discordUrl}
            telegramUrl={telegramUrl}
          />
        </Box>
        <VStack flex={1} justifyContent="center">
          <TitleBlock presaleUrl={saleUrl} />
        </VStack>
      </VStack>
      <Box zIndex={0} position="absolute" top={0} bottom={0} left={0} right={0}>
        <Box height="100%" opacity={0.3}>
          <SceneScrollNext
            radius={sceneRadius}
            tube={sceneTube}
            size={sceneSize}
            radialSegments={sceneRadialSegments}
          />
        </Box>
      </Box>
    </Flex>
  );
};
