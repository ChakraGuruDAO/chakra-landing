import {
  Box,
  Circle,
  HStack,
  Img,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TelegramIcon, TwitterIcon } from "components/icons";

export interface CEOProps {
  name: string;
  position: string;
  description: string;
  twitter: string;
  telegram: string;
  photo: string;
}

export const CEO: React.FC<CEOProps> = ({
  photo,
  name,
  position,
  twitter,
  telegram,
  description,
}) => {
  return (
    <Stack direction="row" spacing={{ base: "30px" }} pt="">
      <Img
        src={photo}
        borderRadius="20px"
        maxWidth={{ base: "270px" }}
        maxHeight={{ base: "350px" }}
      />
      <VStack
        alignItems="flex-start"
        fontWeight={600}
        spacing={{ base: "12px" }}
      >
        <Text
          textTransform="uppercase"
          color="white"
          fontSize="40px"
          lineHeight="120%"
          fontWeight={500}
        >
          {name}
        </Text>
        <HStack spacing={{ base: "20px" }}>
          <Text color="brand.100">{position}</Text>
          <HStack spacing={{ base: "12px" }}>
            <Link href={twitter}>
              <Circle bg="brand.100" size="24px">
                <TwitterIcon boxSize="10px" color="white" />
              </Circle>
            </Link>
            <Link href={telegram}>
              <Circle bg="brand.100" size="24px">
                <TelegramIcon boxSize="10px" color="white" />
              </Circle>
            </Link>
          </HStack>
        </HStack>
        <Text
          maxWidth={{ base: "570px" }}
          fontSize="20px"
          color="white"
          fontWeight={300}
        >
          {description}
        </Text>
      </VStack>
    </Stack>
  );
};
