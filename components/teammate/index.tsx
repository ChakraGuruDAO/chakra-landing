import { Box, Circle, HStack, Img, Text, Link, VStack } from "@chakra-ui/react";
import { TwitterIcon, TelegramIcon } from "components/icons";

export interface TeammateProps {
  name: string;
  position: string;
  description: string;
  twitter: string;
  telegram: string;
  photo: string;
}

export const Teammate: React.FC<TeammateProps> = ({
  photo,
  name,
  position,
  description,
  twitter,
  telegram,
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
          <Link href={twitter}>
            <Circle bg="brand.100" size="32px">
              <TwitterIcon boxSize="12px" color="white" />
            </Circle>
          </Link>
          <Link href={telegram}>
            <Circle bg="brand.100" size="32px">
              <TelegramIcon boxSize="12px" color="white" />
            </Circle>
          </Link>
        </HStack>
      </Box>
      <VStack alignItems="flex-start">
        <Text fontSize={{ base: "32px" }} fontWeight={600} color="white">
          {name}
        </Text>
        <Text fontSize={{ base: "24px" }} fontWeight={600} color="brand.100">
          {position}
        </Text>
        <Text fontSize={{ base: "20px" }} fontWeight={300} color="white">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};
