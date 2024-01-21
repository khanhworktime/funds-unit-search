"use client";
import { DataTable } from "../DataTable";
import { useContext, useMemo, useState } from "react";
import { DataTableReportRecord, transformDataToTableReport } from "@/utils";
import {
  FundsReportTableWrapper,
  TablePaginationWrapper,
} from "@/components/FundsReportTable/fundsReportTable.style";
import { Pagination } from "@/components/Pagination";
import { FundListFilterContext } from "@/Context";
import { DataContext } from "@/Context/data.context";

export function FundsReportTable() {
  // Get fundList
  const fundList = useContext(FundListFilterContext);

  //Get data
  const data = useContext(DataContext);

  // Transform Data to DataTable report record
  const transformedData = useMemo(
    () => transformDataToTableReport(data, fundList),
    [data, fundList],
  );

  // Column defined

  const fundsReportTableColumns = useMemo(
    () => [
      {
        label: "Ngày",
        key: "date",
      },
      ...fundList.map((f) => ({ label: f.label, key: f.name })),
    ],
    [fundList],
  );

  // Pagination
  const pageLimit = 5;
  const totalPage = Math.ceil(data.length / pageLimit);
  const [page, setPage] = useState(1);
  const currentPageData = transformedData.slice(
    (page - 1) * pageLimit,
    page * pageLimit,
  );

  return (
    <FundsReportTableWrapper>
      <DataTable<DataTableReportRecord>
        name={"fundReportTable"}
        data={currentPageData}
        columnsHeader={fundsReportTableColumns}
      />
      <TablePaginationWrapper>
        <Pagination size={totalPage} currentPage={page} setPage={setPage} />
      </TablePaginationWrapper>
    </FundsReportTableWrapper>
  );
}
