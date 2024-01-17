import * as React from "react";
import { SVGProps } from "react";

const CaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m.912 13.668-.61-.674A1.215 1.215 0 0 1 0 12.176c0-.318.1-.587.301-.809L4.261 7 .3 2.633a1.161 1.161 0 0 1-.3-.809c0-.311.1-.584.3-.818L.913.341A.967.967 0 0 1 1.653 0c.294 0 .539.114.734.341l5.303 5.85c.207.216.31.485.31.809 0 .317-.103.59-.31.818l-5.303 5.85a.953.953 0 0 1-.733.332.995.995 0 0 1-.742-.332Z"
    />
  </svg>
);
export default CaretRight;
