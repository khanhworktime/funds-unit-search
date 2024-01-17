import * as React from "react";
import { SVGProps } from "react";

const StockUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.425 16.341h-5.147a.78.78 0 0 0-.78.78v10.1c0 .43.35.78.78.78h5.147c.431 0 .78-.35.78-.78v-10.1a.78.78 0 0 0-.78-.78Zm-.78 10.1h-3.587V17.9h3.588v8.54ZM26.642 10.218h-5.186a.78.78 0 0 0-.78.78v16.221c0 .431.35.78.78.78h5.186c.43 0 .78-.349.78-.78V10.998a.78.78 0 0 0-.78-.78Zm-.78 16.221h-3.626V11.778h3.626v14.661ZM6.248 20.123H1.062a.78.78 0 0 0-.78.78v6.317c0 .43.35.78.78.78h5.186c.43 0 .78-.35.78-.78v-6.317a.78.78 0 0 0-.78-.78Zm-.78 6.317H1.842v-4.757h3.626v4.757ZM27.5.782a.663.663 0 0 0-.507-.273L19.896.002a.782.782 0 0 0-.117 1.56l5.023.341-9.234 7.224L8.51 3.59a.78.78 0 0 0-1.014.039l-7.253 6.94a.78.78 0 0 0-.039 1.092c.14.18.357.283.585.273a.78.78 0 0 0 .546-.234l6.746-6.473 6.98 5.498a.78.78 0 0 0 .975 0l9.982-7.768-.39 4.844a.819.819 0 0 0 .74.819h.04a.78.78 0 0 0 .78-.702l.507-6.59A.624.624 0 0 0 27.5.782Z"
    />
  </svg>
);
export default StockUpIcon;
