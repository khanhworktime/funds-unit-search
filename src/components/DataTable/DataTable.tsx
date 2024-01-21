"use client";
import {
  TableCellStyled,
  TableHeaderStyled,
  TableStyled,
} from "@/components/DataTable/table.style";

export interface ColumnDef {
  label: string;
  key: string;
}

interface TableProps<T> {
  columnsHeader: ColumnDef[];
  data: T[];
  name?: string;
  hasHeaderColumn?: boolean;
  cellTextEmphasis?: boolean;
}

export function DataTable<T extends { [key: string]: any }>({
  columnsHeader,
  data,
  hasHeaderColumn = false,
  cellTextEmphasis = false,
}: TableProps<T>) {
  return (
    <TableStyled>
      <thead>
        <tr>
          {columnsHeader.map((header) => (
            <TableHeaderStyled key={`Table${header.label}`}>
              {header.label}
            </TableHeaderStyled>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={`TableRow${index}`}>
            {columnsHeader.map((header, index) => (
              <TableCellStyled
                key={`TableCell${index}.${header.key}`}
                className={`${
                  hasHeaderColumn && index === 0 ? "hasHeaderColumn" : ""
                } ${cellTextEmphasis && index !== 0 ? "cellTextEmphasis" : ""}`}
              >
                {item[header.key] ?? ""}
              </TableCellStyled>
            ))}
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
}
