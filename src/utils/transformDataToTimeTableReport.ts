import { Data } from "@/models";
import { baseFundsUnitList } from "@/contants/fundsUnit";

export interface DataTimeTableReportRecord {
  fundName?: string;
  startDateValue: string;
  endDateValue: string;
  incresment: string;
}

export function transformDataToTimeTableReport(
  data: Data[],
  fundsName: string[],
): DataTimeTableReportRecord[] {
  return fundsName.map((fName) => {
    const fund = baseFundsUnitList.find((fund) => fund.name === fName);
    const startDateValue =
      data[0]?.records.find((rec) => rec.fundUnit.name === fName)?.value ?? 0;
    const endDateValue =
      data[data.length - 1]?.records.find((rec) => rec.fundUnit.name === fName)
        ?.value ?? 0;
    const incresment =
      startDateValue > endDateValue
        ? endDateValue / startDateValue - 1
        : -(startDateValue / endDateValue - 1);

    return {
      fundName: fund?.label,
      startDateValue: startDateValue.toFixed(2),
      endDateValue: endDateValue.toFixed(2),
      incresment: `${(incresment * 100).toFixed(2)}%`,
    };
  });
}
