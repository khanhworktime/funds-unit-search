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
        <div className={"pageLayout"}>{children}</div>
      </body>
    </html>
  );
}
