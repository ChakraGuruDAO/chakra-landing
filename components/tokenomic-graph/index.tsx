import { Box } from "@chakra-ui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
  return (
    <Box width={{ base: "1170px" }} height={{ base: "500px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={items}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="10 10"
            stroke="rgba(169, 169, 169, 0.3)"
          />
          <XAxis
            dataKey="month"
            stroke="white"
            style={{
              fontFamily: "Inter, sans-serif",
            }}
            fontSize="12px"
            capHeight={20}
            xHeight={50}
          />
          <YAxis
            strokeWidth={0}
            style={{
              fontFamily: "Inter, sans-serif",
            }}
            yAxisId="left"
            fontSize="12px"
            color="rgba(148, 148, 148, 1)"
            tickFormatter={(value: number) => value.toLocaleString()}
          />
          <YAxis
            strokeWidth={0}
            style={{
              fontFamily: "Inter, sans-serif",
            }}
            yAxisId="right"
            dataKey="name"
            orientation="right"
            fontSize="12px"
            color="rgba(148, 148, 148, 1)"
            tickFormatter={(value: number) => value.toLocaleString()}
          />
          <Tooltip />
          <Area
            type="linear"
            dataKey="Pre-sale"
            stackId="1"
            yAxisId="left"
            stroke="rgba(165, 165, 246, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="NFT Launchpad"
            stackId="1"
            yAxisId="left"
            stroke="rgba(157, 234, 201, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="Pre-farming"
            stackId="1"
            yAxisId="left"
            stroke="rgba(80, 239, 237, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="Liquidity"
            stackId="1"
            yAxisId="left"
            stroke="rgba(213, 63, 140, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="Marketing"
            stackId="1"
            yAxisId="left"
            stroke="rgba(166, 187, 255, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="Game ecosystem"
            stackId="1"
            yAxisId="left"
            stroke="rgba(90, 134, 240, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="Partners & Advisors"
            stackId="1"
            yAxisId="left"
            stroke="rgba(90, 134, 240, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="Team"
            stackId="1"
            yAxisId="left"
            stroke="rgba(90, 134, 240, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="Bounty"
            stackId="1"
            yAxisId="left"
            stroke="rgba(90, 134, 240, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="Reserve"
            stackId="1"
            yAxisId="left"
            stroke="rgba(90, 134, 240, 1)"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="Ambassador program"
            stackId="1"
            yAxisId="left"
            stroke="rgba(90, 134, 240, 1)"
            fill="transparent"
          />

          {/* <Area
            type="linear"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="transparent"
          />
          <Area
            type="linear"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="transparent"
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
