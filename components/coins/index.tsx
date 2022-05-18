import { Img, Box, BoxProps } from "@chakra-ui/react";

import { Line } from "./line";

export interface CoinsProps {}

export const Coins: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box
      width={{ xl: "600px", md: "445px" }}
      height={{ xl: "520px", md: "340px" }}
      {...props}
      position="relative"
    >
      <Line
        title="Chakra"
        description="Governance token"
        position="absolute"
        width={{ xl: "320px", md: "130px" }}
        height={{ xl: "110px", md: "231px" }}
        borderLeft={{ base: "2px solid white" }}
        borderBottom={{ base: "2px solid white" }}
        right={{ xl: "77%", md: "80%" }}
        top={{ xl: "25%", md: "-10%" }}
        circleProps={{
          right: { base: "-17px" },
          bottom: { base: "-10px" },
        }}
        textBlockProps={{ wdith: { md: "max" } }}
      />
      <Line
        title="Karma"
        description="Utility token"
        position="absolute"
        width={{ xl: "320px", md: "98px" }}
        height={{ xl: "52px", md: "225px" }}
        borderRight={{ base: "2px solid white" }}
        borderTop={{ base: "2px solid white" }}
        left="77%"
        top="40%"
        textBlockProps={{
          top: { base: "100%" },
          left: { base: "150%" },
          transform: {
            base: "translate(-140%)",
            xl: "translate(-140%)",
            md: "translate(-80%)",
          },
        }}
        circleProps={{
          left: { base: "-17px" },
          top: { base: "-10px" },
        }}
      />
      <Img src="/coins.png" zIndex="base" width="100%" height="inherit" />
    </Box>
  );
};
