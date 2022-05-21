import {
  Box,
  Circle,
  GridItem,
  HStack,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpoint,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { FaTwitter, FaExternalLinkAlt } from "react-icons/fa";
import { TelegramIcon, TwitterIcon } from "components/icons";

export interface CEOProps {
  name: string;
  position: string;
  description: string;
  site: string;
  twitter: string;
  photo: string;
}

export const CEO: React.FC<CEOProps> = ({
  photo,
  name,
  position,
  site,
  twitter,
  description,
}) => {
  const blockDescription = useBreakpointValue({ base: true, md: false });

  return (
    <Stack spacing={{ base: "16px", md: 0 }}>
      <SimpleGrid
        columns={{ base: 4, md: 3, xl: 4 }}
        spacing={{ xl: "30px", md: "20px", base: "16px" }}
      >
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Img src={photo} borderRadius="20px" />
        </GridItem>

        <GridItem
          display="flex"
          colSpan={{ base: 2, md: 2 }}
          alignItems={{ base: "flex-end", md: "flex-start" }}
        >
          <VStack
            alignItems={{ base: "flex-start" }}
            justifyContent={{ base: "flex-end", md: "flex-start" }}
            fontWeight={600}
            spacing={{ base: "12px" }}
          >
            <Text
              textTransform="uppercase"
              color="white"
              fontSize={{ xl: "40px", md: "32px", base: "28px" }}
              lineHeight="120%"
              fontWeight={500}
            >
              {name}
            </Text>
            <HStack
              spacing={{ base: "0px", md: "20px" }}
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "flex-start" }}
            >
              <Text color="brand.100" fontSize={{ base: 24 }}>
                {position}
              </Text>
              <HStack spacing={{ base: "12px", md: "12px" }}>
                <SocialItem url={site} type="site" />
                <SocialItem url={twitter} type="twitter" />
                {/* <Link href={twitter}>
                  <Circle bg="brand.100" size={9}>
                    <TwitterIcon boxSize={4} color="white" />
                  </Circle>
                </Link> */}
              </HStack>
            </HStack>
            {!blockDescription && (
              <Text
                maxWidth={{ base: "570px" }}
                fontSize={{ xl: "20px", md: "16px", base: "16px" }}
                color="white"
                fontWeight={300}
              >
                {description}
              </Text>
            )}
          </VStack>
        </GridItem>
      </SimpleGrid>
      {blockDescription && (
        <Text
          maxWidth={{ base: "570px" }}
          fontSize={{ xl: "20px", md: "16px", base: "16px" }}
          color="white"
          fontWeight={300}
        >
          {description}
        </Text>
      )}
    </Stack>
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
