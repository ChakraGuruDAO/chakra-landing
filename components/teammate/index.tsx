import { Box, Circle, HStack, Img, Text, Link, VStack } from "@chakra-ui/react";
import { FaTwitter, FaExternalLinkAlt } from "react-icons/fa";

export interface TeammateProps {
  name: string;
  position: string;
  description: string;
  photo: string;
  site?: string;
  twitter?: string;
}

export const Teammate: React.FC<TeammateProps> = ({
  photo,
  name,
  position,
  description,
  site,
  twitter,
}) => {
  return (
    <Box>
      <Box position="relative" mb="20px">
        <Img src={photo} borderRadius="20px" />
        <HStack
          spacing={{ base: "12px" }}
          position="absolute"
          bottom="-16px"
          right="16px"
        >
          <SocialItem url={site} type="site" />
          <SocialItem url={twitter} type="twitter" />
        </HStack>
      </Box>
      <VStack alignItems="flex-start">
        <Text
          fontSize={{ xl: "32px", md: "24px", base: "20px" }}
          fontWeight={600}
          color="white"
        >
          {name}
        </Text>
        <Text
          fontSize={{ xl: "24px", md: "20px", base: "16px" }}
          fontWeight={600}
          color="brand.100"
        >
          {position}
        </Text>
        <Text
          fontSize={{ xl: "20px", md: "16px", base: "16px" }}
          fontWeight={300}
          color="white"
        >
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

const SocialItem: React.FC<{ url: string; type: "twitter" | "site" }> = ({
  url,
  type,
}) => {
  return url ? (
    <Link key={url} href={url}>
      <Circle bg="brand.100" size={10}>
        {type === "twitter" && <FaTwitter size={16} color="white" />}
        {type === "site" && <FaExternalLinkAlt size={16} color="white" />}
      </Circle>
    </Link>
  ) : null;
};
