import { Img, Box, BoxProps } from "@chakra-ui/react";

import { Line } from "./line";

export interface CoinsProps {}

export const Coins: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box width="600px" height="520px" {...props} position="relative">
      <Line
        title="Chakra"
        description="Governance token"
        position="absolute"
        width={{ base: "320px" }}
        height={{ base: "110px" }}
        borderLeft={{ base: "2px solid white" }}
        borderBottom={{ base: "2px solid white" }}
        right="77%"
        top="25%"
        circleProps={{
          right: { base: "-17px" },
          bottom: { base: "-10px" },
        }}
      />
      <Line
        title="Karma"
        description="Utility token"
        position="absolute"
        width={{ base: "320px" }}
        height={{ base: "52px" }}
        borderRight={{ base: "2px solid white" }}
        borderTop={{ base: "2px solid white" }}
        left="77%"
        top="40%"
        textBlockProps={{
          top: { base: "100%" },
          left: { base: "150%" },
          transform: { base: "translate(-140%)" },
        }}
        circleProps={{
          left: { base: "-17px" },
          top: { base: "-10px" },
        }}
      />
      <Img src="/coins.png" zIndex="base" width="100%" height="auto" />
    </Box>
  );
};
