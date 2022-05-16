import { Box } from "@chakra-ui/react";

export interface PreSaleLineProps {
  /** Value in percent. Min: 0, Max: 100 */
  value: number;
}

export const PreSaleLine: React.FC<PreSaleLineProps> = ({ value }) => {
  return (
    <Box
      borderRadius="100px"
      bg="rgba(6, 7, 31, 0.1)"
      height={{ base: "32px" }}
      width="100%"
      overflow="hidden"
    >
      <Box
        width={`${value}%`}
        height="100%"
        bgGradient="linear(103.21deg, #D53F8C 28.33%, #5A86F0 87.54%)"
      />
    </Box>
  );
};
