import { Data } from "@/models";
import { FundUnit } from "@/models/fundUnit.model";

export interface DataTableReportRecord {
  [key: string]: string | undefined;

  date: string;
  growth?: string;
  balance?: string;
  conservation?: string;
}

export function transformDataToTableReport(
  data: Data[],
  fundList: FundUnit[],
): DataTableReportRecord[] {
  return data.map((item) => {
    let record: DataTableReportRecord = {
      date: new Date(item.date).toLocaleDateString("vi-vn", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
    };

    // Mapping due to fundList filter
    fundList.forEach((f) => {
      record[f.name] = item.records
        .find((fund) => fund.fundUnit.name === f.name)
        ?.value?.toFixed(2);
    });
    return record;
  });
}
