import { Img, Box } from "@chakra-ui/react";

export interface CoinsProps {}

export const Coins: React.FC<CoinsProps> = () => {
  return (
    <Box>
      <Img src="/coins.png" />
    </Box>
  );
};
