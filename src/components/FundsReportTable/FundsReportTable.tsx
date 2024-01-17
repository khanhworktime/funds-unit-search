import { Table } from "@/components/Table";
import { Data } from "@/models";
import { useMemo, useState } from "react";
import { DataTableReportRecord, transformDataToTableReport } from "@/utils";
import {
  FundsReportTableWrapper,
  TablePaginationWrapper,
} from "@/components/FundsReportTable/fundsReportTable.style";
import { Pagination } from "@/components/Pagination";

interface FundsReportTableProps {
  data: Data[];
}

const fundsReportTableColumns = [
  {
    label: "Ngày",
    key: "date",
  },
  {
    label: "Quỹ Tăng trưởng",
    key: "growth",
  },
  {
    label: "Quỹ Cân bằng",
    key: "balance",
  },
  {
    label: "Quỹ Bảo toàn",
    key: "conservation",
  },
];

export function FundsReportTable({ data }: FundsReportTableProps) {
  // Transform Data to Table report record
  const transformedData = useMemo(
    () => transformDataToTableReport(data),
    [data],
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
      <Table<DataTableReportRecord>
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
