import * as React from "react";
import { SVGProps } from "react";

function CaretLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.088 13.668l.61-.674c.202-.234.302-.507.302-.818 0-.318-.1-.587-.301-.809L3.739 7 7.7 2.633c.2-.222.3-.491.3-.809 0-.311-.1-.584-.3-.818L7.087.341A.967.967 0 006.347 0a.927.927 0 00-.734.341L.31 6.191C.103 6.407 0 6.676 0 7c0 .317.103.59.31.818l5.303 5.85a.953.953 0 00.733.332c.283 0 .53-.11.742-.332z"
        fill={props.color}
      />
    </svg>
  );
}

export default CaretLeftIcon;
