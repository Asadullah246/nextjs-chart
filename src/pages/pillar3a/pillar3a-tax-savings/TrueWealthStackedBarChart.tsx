import { AxisProps, AxisTickProps } from "@nivo/axes";
import { BarDatum, BarTooltipProps, ResponsiveBar } from "@nivo/bar";
import { Theme } from "@nivo/core";
import React, { FC } from "react";

import { formatCurrency } from "lib/utils";

const FONT = {
  fill: "#907D69",
  color: "#907D69",
  fontSize: 14,
  fontFamily: '"DINNextW01", "Helvetica Neue", helvetica, arial, sans-serif'
};

const THEME: Theme = {
  grid: {
    line: {
      strokeDasharray: 6,
      stroke: "#E8E1D8",
      strokeWidth: 2,
      strokeOpacity: 1
    }
  },
  markers: {},
  legends: {
    text: {
      ...FONT
    }
  },
  axis: {
    legend: {
      text: {
        ...FONT
      }
    },
    ticks: {
      line: {
        stroke: "#E8E1D8",
        strokeWidth: 2,
        strokeOpacity: 1
      },
      text: {
        ...FONT
      }
    }
  }
};

interface Props {
  datum: BarDatum[];
  keys: string[];
  colors: { [key: string]: string };
  layout: "horizontal" | "vertical";
}

const TrueWealthStackedBarChart: FC<Props> = ({ datum, keys, layout, colors }) => {
  const mainAxis: AxisProps = {
    tickValues: 4,
    format: (value) => (value >= 1000 ? `CHF ${value / 1000}k` : `CHF ${value}`)
  };

  const secondaryAxis: AxisProps = {
    tickValues: 2,
    tickPadding: 45,
    renderTick: MultilineAxisLabel
  };

  return (
    <ResponsiveBar
      animate={false}
      data={datum}
      keys={keys}
      indexBy="type"
      colors={(d) => colors[d.id]}
      margin={{
        top: layout === "vertical" ? 20 : 0,
        right: layout === "horizontal" ? 250 : 10,
        bottom: layout === "vertical" ? 160 : 30,
        left: layout === "horizontal" ? 100 : 75
      }}
      padding={0.4}
      valueScale={{ type: "linear", nice: true }}
      enableGridX={layout === "horizontal"}
      enableGridY={layout === "vertical"}
      gridXValues={4}
      gridYValues={4}
      tooltip={SimpleTooltip}
      axisLeft={layout === "vertical" ? mainAxis : secondaryAxis}
      axisBottom={layout === "vertical" ? secondaryAxis : mainAxis}
      theme={THEME}
      layers={["axes", "grid", "markers", "bars", "legends"]}
      legends={[
        {
          dataFrom: "keys",
          anchor: layout === "horizontal" ? "right" : "bottom-left",
          direction: "column",
          translateY: layout === "vertical" ? 160 : 0,
          translateX: layout === "vertical" ? -70 : 240,
          itemsSpacing: 10,
          itemWidth: 200,
          itemHeight: 20,
          symbolSize: 20
        }
      ]}
      enableLabel={false}
      layout={layout}
    />
  );
};

const SimpleTooltip: React.FC<BarTooltipProps<any>> = ({ value }) => (
  <div
    style={{
      padding: "16px 12px",
      backgroundColor: "white",
      boxShadow: "0px 5px 16px rgba(0, 0, 0, 0.15)"
    }}
  >
    {formatCurrency(value)}
  </div>
);

const MultilineAxisLabel = ({
  textAnchor,
  opacity,
  value,
  x,
  y,
  textX,
  textY
}: AxisTickProps<any>): JSX.Element => {
  const lines = ("" + value).split(/\n/).filter((l: string) => l !== "");
  const count = lines.length;
  const spans = lines.map((v: string, i: number) => (
    <tspan textAnchor={"middle"} x={0} y={(i - Math.floor(count / 2)) * 20} key={i}>
      {v}
    </tspan>
  ));
  return (
    <g transform={`translate(${x},${y})`} style={{ opacity }}>
      <text transform={`translate(${textX},${textY})`} textAnchor={textAnchor} style={{ ...FONT }}>
        {spans}
      </text>
    </g>
  );
};

export default TrueWealthStackedBarChart;
