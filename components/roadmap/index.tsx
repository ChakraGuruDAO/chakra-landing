import { VStack, Box, Text, Circle, BoxProps } from "@chakra-ui/react";
import { CheckIcon } from "components/icons";
import { useTransform, motion, useViewportScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";

export interface RoadmapComponentProps {
  items: RoadmapItem[];
}

type RoadmapItem = {
  title: string;
  content: React.ReactNode;
  align: "left" | "right";
  marginTop?: BoxProps["marginTop"];
};

const RoadmapCircle = () => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  console.log({ intersection });

  return (
    <Circle
      ref={intersectionRef}
      bg="brand.100"
      size={{ base: "48px" }}
      outline="3px solid white"
      position="absolute"
      left="50%"
      transition="all"
      transitionDuration="1s"
      transform={`translateX(-45%) scale(${intersection?.intersectionRatio})`}
      zIndex="overlay"
    >
      <CheckIcon color="white" />
    </Circle>
  );
};

export const RoadmapComponent: React.FC<RoadmapComponentProps> = ({
  items,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [scrollFactor, setScrollFactor] = useState(0);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const elem = ref.current;
      setOffsetTop(elem.offsetTop + 200);
      setMaxHeight(elem.clientHeight);
    }
  }, [ref]);

  const handlePageScroll = useCallback(
    function (this: Window, ev: Event) {
      const target = this;
      const maxScroll = offsetTop + maxHeight;
      const scrollY = target.scrollY;
      if (scrollY >= offsetTop && scrollY <= maxScroll) {
        const factor = scrollY / maxScroll;
        const scrollDelta = scrollY - offsetTop;
        const scrollFactor = scrollDelta / maxHeight;
        setScrollFactor(scrollFactor);
        console.log({
          scrollY: target.scrollY,
          offsetTop,
          factor,
          scrollDelta,
          scrollFactor,
        });
      }
    },
    [offsetTop, maxHeight]
  );

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);

    return () => window.removeEventListener("scroll", handlePageScroll);
  }, [handlePageScroll]);

  // console.log({ offsetTop });

  return (
    <VStack
      position="relative"
      maxW={{ xl: "80%", md: "100%" }}
      margin="0 auto"
      ref={ref}
    >
      {items.map((item, id) => {
        return (
          <Box
            key={id}
            alignSelf={item.align === "left" ? "flex-start" : "flex-end"}
            marginTop={item.marginTop}
          >
            <RoadmapCircle />

            <Box
              bg="black"
              borderRadius="20px"
              p="20px"
              maxW={{ xl: "330px", md: "264px" }}
            >
              <Text
                color="brand.100"
                fontWeight={600}
                fontSize={{ xl: "24px", md: "20px" }}
              >
                {item.title}
              </Text>
              <Box
                marginLeft={{ base: "10px" }}
                fontSize={{ xl: "20px", md: "16px" }}
              >
                {item.content}
              </Box>
            </Box>
          </Box>
        );
      })}
      <Box
        position="absolute"
        bg="brand.100"
        top="0"
        bottom="0"
        height={scrollFactor * maxHeight}
        width="6px"
        transition="all"
        left="50%"
        zIndex={2}
      />
      <Box
        position="absolute"
        bg="white"
        top="0"
        zIndex={1}
        bottom="0"
        width="6px"
        left="50%"
      />
    </VStack>
  );
};
