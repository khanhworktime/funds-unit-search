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
import { ChangeEventHandler, useEffect, useState } from "react";
import { Data } from "@/models";
import { baseFundsUnitList } from "@/contants/fundsUnit";
import { SummarizeTimeReportTable } from "@/components/SummarizeTimeReportTable";
import { FundValueChangeReport } from "@/components/FundValueChangeReport";
import { FundListFilterContext } from "@/Context";
import { DataContext } from "@/Context/data.context";
import { FundsReportChart } from "@/components/FundsReportChart";
import { Filter } from "@/models/filter.model";
import { getVietnameseDate, vietnameseDateFormat } from "@/utils";

export default function Home() {
  const [dataList, setDataList] = useState<Data[]>([]);

  // Date report view switch
  const [displayChart, setDisplayChart] = useState<boolean>(false);

  useEffect(() => {
    // Set data record limit
    const length = 25;
    const newData = new Array<Data>(length);
    for (let i = 0; i < length; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      newData[i] = {
        date: date.toDateString(),
        records: baseFundsUnitList.map((fundUnit) => ({
          fundUnit,
          value: Math.random() * 500,
        })),
      };
    }
    setDataList(newData);
    setFilteredData(newData);
  }, []);

  // Filters
  const [filter, setFilter] = useState<Filter>({
    startDate: vietnameseDateFormat(new Date()),
    endDate: vietnameseDateFormat(new Date()),
  });

  // Filter funds
  const [fundList, setFundList] = useState(baseFundsUnitList);
  // Filter data
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  // Handlers
  const onSelectFundChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    if (event.target.value == "all") {
      setFilter((prev) => ({ ...prev, fundUnitList: baseFundsUnitList }));
    }

    const fundItem = baseFundsUnitList.find(
      (f) => f.name === event.target.value,
    );
    if (fundItem !== undefined)
      setFilter((prev) => ({ ...prev, fundUnitList: [fundItem] }));
  };

  const onTimeRangeChange: (startDate: string, endDate: string) => void = (
    startDate,
    endDate,
  ) => {
    setFilter((prev) => ({ ...prev, startDate, endDate }));
  };

  const onApplyFilter = () => {
    setFundList(filter.fundUnitList ?? baseFundsUnitList);

    const filData = dataList.filter((rec) => {
      const formattedDate = new Date(rec.date);

      return (
        formattedDate >= getVietnameseDate(filter.startDate ?? "") &&
        formattedDate <= getVietnameseDate(filter.endDate ?? "")
      );
    });

    setFilteredData(filData);
  };

  const onClearFilter = () => {
    setFundList(baseFundsUnitList);
    setFilteredData(dataList);
  };

  return (
    <ThemeProvider theme={baseColor}>
      <FundListFilterContext.Provider value={fundList}>
        <DataContext.Provider value={filteredData}>
          <Header>
            <FlexWrapper>
              <Select
                placeholder={"Tất cả các quỹ"}
                options={baseFundsUnitList.map((fund) => ({
                  value: fund.name,
                  label: fund.label,
                }))}
                onChange={onSelectFundChangeHandler}
              />
              <TimeRange
                placeholder={"Chọn khoảng thời gian"}
                onChange={onTimeRangeChange}
              />
              <Button onClick={onApplyFilter}>TRA CỨU</Button>
              {filteredData.length !== dataList.length && (
                <Button onClick={onClearFilter}>HỦY</Button>
              )}
            </FlexWrapper>
            <FlexWrapper>
              <IconWrapper onClick={() => setDisplayChart(true)}>
                <StockUpIcon
                  color={
                    !displayChart ? baseColor.text.primary : baseColor.primary
                  }
                />
              </IconWrapper>
              <IconWrapper onClick={() => setDisplayChart(false)}>
                <SheetIcon
                  color={
                    displayChart ? baseColor.text.primary : baseColor.primary
                  }
                />
              </IconWrapper>
            </FlexWrapper>
          </Header>
          {displayChart ? <FundsReportChart /> : <FundsReportTable />}
          <SummarizeTimeReportTable />
          <FundValueChangeReport />
        </DataContext.Provider>
      </FundListFilterContext.Provider>
    </ThemeProvider>
  );
}
