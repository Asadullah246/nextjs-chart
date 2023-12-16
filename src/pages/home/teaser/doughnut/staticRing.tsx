import { pie } from "d3-shape";
import React from "react";

import { Segment } from "src/pages/home/teaser/doughnut/segment";

interface RingData {
  value: number;
  color: string;
}

interface Props {
  data: RingData[];
  innerRadius: number;
  outerRadius: number;
}

const ringPie = pie<RingData>()
  .value(({ value }) => value)
  .sort(null);

export const StaticRing: React.FC<Props> = ({ data, innerRadius, outerRadius }) => {
  const paths = ringPie(data).map(({ startAngle, endAngle }, i) => (
    <Segment
      key={i}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      opacity={1}
      fill={data[i].color}
    />
  ));
  return <g>{paths}</g>;
};
