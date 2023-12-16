import { arc } from "d3-shape";
import React, { FC, SVGAttributes } from "react";

const segmentArc = arc();

interface Props extends SVGAttributes<SVGPathElement> {
  startAngle: number;
  endAngle: number;
  innerRadius: number;
  outerRadius: number;
  fill?: string;
}

export const Segment: FC<Props> = ({
  startAngle,
  endAngle,
  innerRadius,
  outerRadius,
  fill,
  ...props
}) => {
  if (almostEqual(startAngle, endAngle)) {
    return null;
  }
  const d =
    segmentArc({
      startAngle,
      endAngle,
      innerRadius,
      outerRadius,
      padAngle: 0
    }) ?? undefined;
  return <path {...props} d={d} fill={fill} aria-hidden="true" />;
};

const EPSILON = 1e-10;
const almostEqual = (a: number, b: number) => Math.abs(a - b) < EPSILON;
