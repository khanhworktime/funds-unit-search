import { Data } from "@/models";

export interface DataTableReportRecord {
  date: string;
  growth?: string;
  balance?: string;
  conservation?: string;
}

export function transformDataToTableReport(
  data: Data[],
): DataTableReportRecord[] {
  return data.map((item) => {
    let record: DataTableReportRecord = {
      date: new Date(item.date).toLocaleDateString("vi-vn", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      growth: item.records
        .find((fund) => fund.fundUnit.name === "growth")
        ?.value?.toFixed(2),
      balance: item.records
        .find((fund) => fund.fundUnit.name === "balance")
        ?.value?.toFixed(2),
      conservation: item.records
        .find((fund) => fund.fundUnit.name === "conservation")
        ?.value?.toFixed(2),
    };
    return record;
  });
}
