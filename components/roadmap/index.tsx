import { VStack, Box, Text, Circle, BoxProps } from "@chakra-ui/react";
import { CheckIcon } from "components/icons";
import { Parallax } from "react-scroll-parallax";

export interface RoadmapComponentProps {
  items: RoadmapItem[];
}

type RoadmapItem = {
  title: string;
  content: React.ReactNode;
  align: "left" | "right";
  marginTop?: BoxProps["marginTop"];
};

export const RoadmapComponent: React.FC<RoadmapComponentProps> = ({
  items,
}) => {
  return (
    <VStack position="relative" maxW={{ base: "80%" }} margin="0 auto">
      {items.map((item, id) => {
        return (
          <Box
            key={id}
            alignSelf={item.align === "left" ? "flex-start" : "flex-end"}
            marginTop={item.marginTop}
          >
            <Circle
              bg="brand.100"
              size="48px"
              outline="3px solid white"
              position="absolute"
              left="50%"
              transform="translateX(-45%)"
              zIndex="overlay"
            >
              <CheckIcon color="white" />
            </Circle>
            <Box bg="black" borderRadius="20px" p="20px">
              <Text
                color="brand.100"
                fontWeight={600}
                fontSize={{ base: "24px" }}
              >
                {item.title}
              </Text>
              <Box marginLeft={{ base: "10px" }}>{item.content}</Box>
            </Box>
          </Box>
        );
      })}
      <Box
        position="absolute"
        bg="brand.100"
        top="0"
        bottom="0"
        width="6px"
        left="50%"
      />
    </VStack>
  );
};
