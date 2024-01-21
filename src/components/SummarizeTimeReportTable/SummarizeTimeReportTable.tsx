import { ColumnDef, DataTable } from "../DataTable";
import { useContext, useMemo } from "react";
import {
  DataTimeTableReportRecord,
  transformDataToTimeTableReport,
} from "@/utils/transformDataToTimeTableReport";
import { FundListFilterContext } from "@/Context";
import { DataContext } from "@/Context/data.context";

const summarizeTimeReportTableColumn: ColumnDef[] = [
  {
    label: "Tên quỹ",
    key: "fundName",
  },
  {
    label: "Ngày bắt đầu",
    key: "startDateValue",
  },
  {
    label: "Ngày kết thúc",
    key: "endDateValue",
  },
  {
    label: "Tăng/Giảm (%)",
    key: "incresment",
  },
] as const;

export function SummarizeTimeReportTable() {
  // Get fundList filtered
  const fundList = useContext(FundListFilterContext);

  //Get data
  const data = useContext(DataContext);
  // transform data
  const transformedData = useMemo(
    () =>
      transformDataToTimeTableReport(
        data,
        fundList.map((f) => f.name),
      ),
    [data, fundList],
  );

  return (
    <DataTable<DataTimeTableReportRecord>
      data={transformedData}
      columnsHeader={summarizeTimeReportTableColumn}
      hasHeaderColumn={true}
      cellTextEmphasis={true}
    />
  );
}
