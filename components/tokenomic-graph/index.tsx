import {
  Box,
  useBreakpointValue,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";
import LINQ from "@berish/linq";
import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { PieProps, Pies } from "./pies";

export interface TokenomicItem {
  month: string;
  name: string;
  color: string;
  mining: number;
  staking: number;
  partners: number;
  tesm: number;
  marketing: number;
  public: number;
}

export interface NewTokenomicItem {
  month: number;
  [key: string]: number;
}

export interface TokenomicGraphProps {
  items: NewTokenomicItem[];
  pieItems: PieProps[];
}

const colors = [
  "rgba(90, 134, 240, 1)",
  "rgba(213, 63, 140, 1)",
  "var(--chakra-colors-teal-400)",
  "rgba(180, 197, 255, 1)",
  "rgba(135, 162, 250, 1)",
  "var(--chakra-colors-green-400)",
  "var(--chakra-colors-red-400)",
  "var(--chakra-colors-cyan-400)",
  "var(--chakra-colors-gray-400)",
  "var(--chakra-colors-pink-400)",
  "var(--chakra-colors-blue-400)",
];

export const TokenomicGraph: React.FC<TokenomicGraphProps> = ({
  items,
  pieItems,
}) => {
  const allKeys = useMemo(
    () =>
      LINQ.from(items)
        .selectMany((item) => Object.keys(item))
        .distinct()
        .filter((m) => m !== "month"),
    [items]
  );
  const xInterval = useBreakpointValue({ base: 5, md: 5, xl: 0 });
  const yTickMargin = useBreakpointValue({ base: 50, md: -5 });
  const yFontSize = useBreakpointValue({ base: 7, md: 12 });

  return (
    <>
      <Box width="100%" mb={{ base: "40px!important" }}>
        <Pies items={pieItems} />
      </Box>
      <Box
        width={{ xl: "1170px", md: "620px", base: "343px" }}
        height={{ xl: "500px", md: "350px", base: "220px" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={items}
            margin={{
              top: 10,
              right: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              height={90}
              strokeDasharray="10 10"
              stroke="rgba(169, 169, 169, 0.3)"
            />
            <XAxis
              dataKey="month"
              stroke="white"
              fontSize="10px"
              capHeight={20}
              xHeight={50}
              interval={xInterval}
            />
            <YAxis
              strokeWidth={0}
              tickMargin={yTickMargin}
              tick={{ textAnchor: "start", dy: -5 }}
              padding={{ bottom: 30 }}
              domain={["auto", "auto"]}
              tickCount={5}
              yAxisId="left"
              fontSize={yFontSize}
              color="rgba(148, 148, 148, 1)"
              tickFormatter={(value: number) => value.toLocaleString()}
            />
            <Tooltip content={<CustomTooltip />} />
            {allKeys.map((key, index) => (
              <Area
                key={key}
                type="linear"
                dataKey={key}
                stackId="1"
                yAxisId="left"
                label={key}
                stroke={colors[index]}
                fill={colors[index]}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

const CustomTooltip: React.FC<TooltipProps<any, any>> = ({
  active,
  payload,
  label,
}) => {
  if (active) {
    return (
      <Box
        background="whiteAlpha.900"
        border="1px solid var(--chakra-colors-blue-200)"
        borderRadius={10}
        minH="200px"
        minW="150px"
        px={4}
        py={6}
      >
        <Heading size="md">{label} month</Heading>
        {payload.map((data) => (
          <HStack key={data.dataKey} justifyContent="space-between" gap={4}>
            <Text color={data.color}>{data.name}</Text>
            <Text color={data.color}>
              {typeof data.value === "number"
                ? data.value.toLocaleString("en-US")
                : ""}
            </Text>
          </HStack>
        ))}
      </Box>
    );
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};
