import { Img, Box, BoxProps } from "@chakra-ui/react";

import { Line } from "./line";

export interface CoinsProps {}

export const Coins: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box
      width={{ xl: "600px", md: "445px", base: "340px" }}
      height={{ xl: "520px", md: "340px", base: "261px" }}
      {...props}
      position="relative"
    >
      <Line
        title="Chakra"
        description="Governance token"
        position="absolute"
        width={{ xl: "320px", md: "130px", base: "70px" }}
        height={{ xl: "110px", md: "231px", base: "166px" }}
        borderLeft={{ base: "2px solid white" }}
        borderBottom={{ base: "2px solid white" }}
        right={{ xl: "77%", md: "80%" }}
        top={{ xl: "25%", md: "-10%" }}
        circleProps={{
          right: { base: "-17px" },
          bottom: { base: "-10px" },
        }}
        textBlockProps={{
          width: { base: "max" },
          transform: {
            base: "translate(-10%)",
            md: "translate(145%)",
          },
        }}
      />
      <Line
        title="Karma"
        description="Utility token"
        position="absolute"
        width={{ xl: "320px", md: "98px", base: "35px" }}
        height={{ xl: "52px", md: "225px", base: "100px" }}
        borderRight={{ base: "2px solid white" }}
        borderBottom={{ base: "2px solid white" }}
        left={{ base: "75%", md: "77%" }}
        top={{ base: "0%", md: "40%" }}
        textBlockProps={{
          top: { base: "-44px", md: "100%" },
          left: { base: "350%", md: "150%" },
          transform: {
            base: "translate(-140%)",
            xl: "translate(-140%)",
            md: "translate(-80%)",
          },
        }}
        circleProps={{
          left: { base: "-17px" },
          top: { base: undefined, md: "-10px" },
          bottom: { base: "-9px", md: undefined },
        }}
      />
      <Img src="/coins.png" zIndex="base" width="100%" height="inherit" />
    </Box>
  );
};
