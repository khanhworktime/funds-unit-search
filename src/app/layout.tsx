import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import "./baseStyle.css";

const inter = Manrope({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Funds Unit Search",
  description:
    "This is a mini project to create a Vietnamese website for funds unit information search",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1 className={"homeHeading"}>Tra cứu giá đơn vị quỹ</h1>
          <p className={"description"}>
            Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện
            tại và quá khứ, bạn có thể tùy chọn thời điểm tra cứu giá trị quỹ để
            nắm bắt đầy đủ nhất sự thay đổi của giá đơn vị quỹ theo khung thời
            gian bạn muốn
          </p>
        </header>
        <div className={"pageLayout"}>{children}</div>
      </body>
    </html>
  );
}
