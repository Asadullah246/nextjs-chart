import dynamic from "next/dynamic";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

import { TestimonialsSliceProps } from "src/pages/home/testimonialsSlice";

const TestimonialsSlice = dynamic<TestimonialsSliceProps>(() =>
  import("src/pages/home/testimonialsSlice").then((mod) => mod.TestimonialsSlice)
);

export const TestimonialsSliceContainer: FC<TestimonialsSliceProps> = (props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return <div ref={ref}>{inView && <TestimonialsSlice {...props} />}</div>;
};
