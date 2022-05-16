import { Box, HStack, Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import { TimerPart } from "./timer-part";

export interface PreSaleTimerProps extends React.ComponentProps<typeof HStack> {
  expireOn: Date;
}

const Divider = (
  <Text
    color="brand.100"
    fontSize={{ base: "64px" }}
    lineHeight="100%"
    fontWeight={500}
    userSelect="none"
    pb="45px"
  >
    :
  </Text>
);

export const PreSaleTimer: React.FC<PreSaleTimerProps> = ({
  expireOn,
  ...props
}) => {
  const { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: expireOn,
  });

  return (
    <HStack
      width="100%"
      alignItems="center"
      spacing={{ base: "5px" }}
      {...props}
    >
      <TimerPart title="Day" value={days} />
      {Divider}
      <TimerPart title="Hours" value={hours} />
      {Divider}
      <TimerPart title="Minutes" value={minutes} />
      {Divider}
      <TimerPart title="Seconds" value={seconds} />
    </HStack>
  );
};
