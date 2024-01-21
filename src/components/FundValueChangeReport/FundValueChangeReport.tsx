import {
  FundValueChangeContentWrapper,
  FundValueChangeHeader,
  FundValueChangeWrapper,
  SeparateLine,
} from "@/components/FundValueChangeReport/fundValueChange.style";
import { FundStatisChart } from "@/components/FundStatisChart";
import { Select } from "@/components/Select";
import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { FundListFilterContext } from "@/Context";
import { timeFilterOptions } from "@/contants/timeFilter";
import { FundUnit } from "@/models/fundUnit.model";

interface TimeReportRecord {
  fund: FundUnit;
  value: string;
}

export function FundValueChangeReport() {
  // Get fundList filtered
  const fundList = useContext(FundListFilterContext);

  //Get data

  const [timeReport, setTimeReport] = useState<TimeReportRecord[]>([]);

  // Make new data
  const createReportData = () => {
    const newReport: TimeReportRecord[] = [];
    fundList.forEach((f) => {
      const val = Math.random() * 100 + 50 - 100 + 50;
      newReport.push({
        fund: f,
        value: val > 0 ? `+${val.toFixed(2)}` : val.toFixed(2),
      });
    });

    setTimeReport(newReport);
  };

  // Side effect
  useEffect(() => {
    createReportData();
    //   @ts-ignore
  }, [fundList]);

  // Handlers
  const onSelectTimeChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    _,
  ) => {
    createReportData();
  };

  return (
    <FundValueChangeWrapper>
      <FundValueChangeHeader>Thay đổi của giá trị quỹ</FundValueChangeHeader>
      <FundValueChangeContentWrapper>
        <h3>Từ lúc thành lập quỹ</h3>
        <FundStatisChart />
      </FundValueChangeContentWrapper>
      <SeparateLine />
      <FundValueChangeContentWrapper>
        <div className={"statisticItem"}>
          <h3>Thời gian</h3>
          <Select
            options={timeFilterOptions}
            defaultValue={timeFilterOptions[0].value}
            onChange={onSelectTimeChangeHandler}
          />
        </div>
        {timeReport.map((record) => (
          <div
            className={"statisticItem"}
            key={`statisticReport${record.fund.name}`}
          >
            <h4>{record.fund.label}</h4>
            <p>{record.value}%</p>
          </div>
        ))}
      </FundValueChangeContentWrapper>
    </FundValueChangeWrapper>
  );
}
