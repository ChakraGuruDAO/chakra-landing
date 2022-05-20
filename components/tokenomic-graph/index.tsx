import {
  Box,
  useBreakpointValue,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";
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
import { Pies } from "./pies";

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
  "Pre-sale": number;
  "NFT Launchpad": number;
  "Pre-farming": number;
  Liquidity: number;
  Marketing: number;
  "Game ecosystem": number;
  "Partners & Advisors": number;
  Team: number;
  Bounty: number;
  Reserve: number;
  "Ambassador program": number;
}

export interface TokenomicGraphProps {
  items: NewTokenomicItem[];
}

export const TokenomicGraph: React.FC<TokenomicGraphProps> = ({ items }) => {
  const xInterval = useBreakpointValue({ base: 5, md: 5, xl: 0 });
  const yTickMargin = useBreakpointValue({ base: 50, md: -5 });
  const yFontSize = useBreakpointValue({ base: 7, md: 12 });

  return (
    <>
      <Box width="100%" mb={{ base: "40px!important" }}>
        <Pies />
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
            <Area
              type="linear"
              dataKey="Pre-sale"
              stackId="1"
              yAxisId="left"
              label="Pre-sale"
              stroke="rgba(90, 134, 240, 1)"
              fill="rgba(90, 134, 240, 1)"
            />
            <Area
              type="linear"
              dataKey="NFT Launchpad"
              stackId="1"
              yAxisId="left"
              stroke="rgba(213, 63, 140, 1)"
              fill="rgba(213, 63, 140, 1)"
            />
            <Area
              type="linear"
              dataKey="Pre-farming"
              stackId="1"
              yAxisId="left"
              stroke="var(--chakra-colors-teal-400)"
              fill="var(--chakra-colors-teal-400)"
            />
            <Area
              type="linear"
              dataKey="Liquidity"
              stackId="1"
              yAxisId="left"
              stroke="rgba(180, 197, 255, 1)"
              fill="rgba(180, 197, 255, 1)"
            />
            <Area
              type="linear"
              dataKey="Marketing"
              stackId="1"
              yAxisId="left"
              stroke="rgba(135, 162, 250, 1)"
              fill="rgba(135, 162, 250, 1)"
            />
            <Area
              type="linear"
              dataKey="Game ecosystem"
              stackId="1"
              yAxisId="left"
              stroke="var(--chakra-colors-green-400)"
              fill="var(--chakra-colors-green-400)"
            />
            <Area
              type="linear"
              dataKey="Partners & Advisors"
              stackId="1"
              yAxisId="left"
              stroke="var(--chakra-colors-red-400)"
              fill="var(--chakra-colors-red-400)"
            />
            <Area
              type="linear"
              dataKey="Team"
              stackId="1"
              yAxisId="left"
              stroke="var(--chakra-colors-cyan-400)"
              fill="var(--chakra-colors-cyan-400)"
            />
            <Area
              type="linear"
              dataKey="Bounty"
              stackId="1"
              yAxisId="left"
              stroke="var(--chakra-colors-gray-400)"
              fill="var(--chakra-colors-gray-400)"
            />
            <Area
              type="linear"
              dataKey="Reserve"
              stackId="1"
              yAxisId="left"
              stroke="var(--chakra-colors-pink-400)"
              fill="var(--chakra-colors-pink-400)"
            />
            <Area
              type="linear"
              dataKey="Ambassador program"
              stackId="1"
              yAxisId="left"
              stroke="var(--chakra-colors-blue-400)"
              fill="var(--chakra-colors-blue-400)"
            />
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
