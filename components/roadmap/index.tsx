import {
  VStack,
  Box,
  Text,
  Circle,
  BoxProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CheckIcon } from "components/icons";
import { useTransform, motion, useViewportScroll } from "framer-motion";
import { off } from "process";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

const RoadmapCircle = ({
  currentScroll,
  offset,
  align,
}: {
  currentScroll: number;
  offset: number;
  align: RoadmapItem["align"];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      const top = currentScroll + elem.getBoundingClientRect().top;
      setOffsetTop(top);
    }
  }, [ref, currentScroll]);

  const show = useMemo(
    () => currentScroll >= offsetTop - offset,
    [currentScroll, offsetTop, offset]
  );

  return (
    <Circle
      ref={ref}
      bg="brand.100"
      size={{ base: "48px" }}
      outline="3px solid white"
      position="absolute"
      justifySelf="center"
      // right={align === "left" ? { base: 0 } : { base: "100%" }}
      top={{ base: "-64px", md: 0 }}
      transition="all"
      transitionDuration="0.5s"
      left="50%"
      transform="translateX(-40%)"
      opacity={show ? 1 : 0}
      // transform={
      //   align === "left"
      //     ? { base: `translateX(150%)` }
      //     : { base: "translateX(-48%)" }
      // }
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
  const offset = useBreakpointValue({ base: 40, md: 70, lg: 80 });
  const [scrollFactor, setScrollFactor] = useState(0);
  const [scale, setScale] = useState(0);
  const [activeLineHeight, setActiveLineHeight] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);

  const handlePageScroll = useCallback(
    function (this: Window, ev: Event) {
      const target = this;
      const elem = ref.current;
      const maxHeight = elem.clientHeight;
      const offsetTop = elem.offsetTop;
      const maxScroll = offsetTop + maxHeight;
      const scrollY = target.scrollY;

      if (scrollY >= offsetTop && scrollY <= maxScroll) {
        const factor = scrollY / maxScroll;
        const scrollDelta = scrollY - offsetTop;
        const scrollFactor = scrollDelta / maxHeight;
        setScrollFactor(scrollFactor);
        setCurrentScroll(scrollY);
        setActiveLineHeight(scrollFactor * maxHeight + 40);
        console.log({
          scrollY: target.scrollY,
          offsetTop,
          factor,
          scrollDelta,
          scrollFactor,
        });
      }
    },
    [ref]
  );

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);

    return () => window.removeEventListener("scroll", handlePageScroll);
  }, [handlePageScroll]);

  // console.log({ offsetTop });

  return (
    <VStack
      position="relative"
      maxW={{ xl: "80%", md: "100%", base: "100%" }}
      margin="0 auto"
      gap={{ base: "65px", md: undefined }}
      ref={ref}
      paddingTop={{ base: "48px", md: 0 }}
    >
      {items.map((item, id) => {
        return (
          <Box
            zIndex={3}
            key={id}
            display="flex"
            position="relative"
            width="100%"
            flexDirection={item.align === "left" ? "row" : "row-reverse"}
            alignSelf={
              item.align === "left"
                ? {
                    base: "center",
                    md: "flex-start",
                  }
                : {
                    base: "center",
                    md: "flex-end",
                  }
            }
            marginTop={item.marginTop}
          >
            <RoadmapCircle
              offset={offset}
              align={item.align}
              currentScroll={currentScroll}
            />

            <Box
              bg="black"
              borderRadius="20px"
              p="20px"
              maxW={{ xl: "330px", md: "264px", base: "100%" }}
              w={{ base: "100%", md: undefined }}
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
        height={activeLineHeight}
        width="6px"
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
