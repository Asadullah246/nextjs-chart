import dynamic from "next/dynamic";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

import { PressSliceProps } from "src/pages/home/pressSlice";

const PressSlice = dynamic<PressSliceProps>(() =>
  import("src/pages/home/pressSlice").then((mod) => mod.PressSlice)
);

export const PressSliceContainer: FC<PressSliceProps> = (props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return <div ref={ref}>{inView && <PressSlice {...props} />}</div>;
};
