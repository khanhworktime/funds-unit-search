"use client";
import { Select } from "@/components/Select";
import { ThemeProvider } from "styled-components";
import { baseColor } from "@/theme/theme";
import { FlexWrapper, Header, IconWrapper } from "@/app/page.style";
import { TimeRange } from "@/components/TimeRange";
import { Button } from "@/components/Button";
import StockUpIcon from "@/assets/StockUp";
import SheetIcon from "@/assets/Sheet";
import { FundsReportTable } from "@/components/FundsReportTable";
import { useEffect, useState } from "react";
import { Data } from "@/models";
import { fundsUnitList } from "@/contants/fundsUnit";

export default function Home() {
  const [dataList, setDataList] = useState<Data[]>([]);

  useEffect(() => {
    // Set data record limit
    const maxRecord = 20;
    const minRecord = 5;
    const length =
      parseInt(`${Math.random() * maxRecord - minRecord}`) + minRecord;
    const newData = new Array<Data>(length);
    for (let i = 0; i < length; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      newData[i] = {
        date: date.toDateString(),
        records: fundsUnitList.map((fundUnit) => ({
          fundUnit,
          value: Math.random() * 500,
        })),
      };
    }
    setDataList(newData);
  }, []);

  // Get theme
  return (
    <ThemeProvider theme={baseColor}>
      <Header>
        <FlexWrapper>
          <Select
            placeholder={"Chọn quỹ"}
            options={[{ label: "Yes", value: "We can" }]}
          />
          <TimeRange placeholder={"Chọn khoảng thời gian"} />
          <Button>TRA CỨU</Button>
        </FlexWrapper>
        <FlexWrapper>
          <IconWrapper>
            <StockUpIcon color={baseColor.text.primary} />
          </IconWrapper>
          <IconWrapper>
            <SheetIcon color={baseColor.text.primary} />
          </IconWrapper>
        </FlexWrapper>
      </Header>
      <div>
        <FundsReportTable data={dataList} />
      </div>
    </ThemeProvider>
  );
}
