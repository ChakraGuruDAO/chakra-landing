import { Box, Img, SimpleGrid, VStack, Text } from "@chakra-ui/react";

interface PieProps {
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

export const Pies = () => {
  const items: PieProps[] = [
    {
      img: "/tokenomic/marketing.svg",
      title: "Marketing",
      description: "30% — 1,500,000,000",
    },
    {
      img: "/tokenomic/team.svg",
      title: "Team",
      description: "30% — 1,500,000,000",
    },
    {
      img: "/tokenomic/partners.svg",
      title: "Partners",
      description: "30% — 1,500,000,000",
    },
    {
      img: "/tokenomic/public-sale.svg",
      title: "Public Sale",
      description: "30% — 1,500,000,000",
    },
    {
      img: "/tokenomic/staking.svg",
      title: "Staking",
      description: "30% — 1,500,000,000",
    },
    {
      img: "/tokenomic/mining.svg",
      title: "Mining",
      description: "30% — 1,500,000,000",
    },
  ];

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
