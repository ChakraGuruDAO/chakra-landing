import { Box, Img, SimpleGrid, VStack, Text } from "@chakra-ui/react";

export interface PieProps {
  img: string;
  title: string;
  description: string;
}

export const Pie: React.FC<PieProps> = ({ img, title, description }) => {
  return (
    <Box
      display="flex"
      gap={{ base: "10px", lg: "36px" }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
    >
      <Img src={img} boxSize={{ base: "60px", lg: "80px" }} />
      <VStack alignItems={{ base: "center", md: "flex-start" }}>
        <Text
          color="white"
          fontWeight={600}
          fontSize={{ base: "16px", md: "16px", lg: "20px" }}
        >
          {title}
        </Text>
        <Text
          fontWeight={600}
          color="brand.100"
          fontSize={{ base: "9px", md: "10px", lg: "20px" }}
        >
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export interface PiesProps {
  items: PieProps[];
}

export const Pies: React.FC<PiesProps> = ({ items }) => {
  return (
    <SimpleGrid
      columns={{ base: 3 }}
      spacing={{ base: "16px", md: "20px", lg: "30px" }}
      width="100%"
    >
      {items.map((item, id) => (
        <Pie key={id} {...item} />
      ))}
    </SimpleGrid>
  );
};
