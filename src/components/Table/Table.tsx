import {
  TableCellStyled,
  TableHeaderStyled,
  TableStyled,
} from "@/components/Table/table.style";

interface ColumnDef {
  label: string;
  key: string;
}

interface TableProps<T> {
  columnsHeader: ColumnDef[];
  data: T[];
  name?: string;
}

export function Table<T extends { [key: string]: any }>({
  columnsHeader,
  data,
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
            {columnsHeader.map((header) => (
              <TableCellStyled key={`TableCell${index}.${header.key}`}>
                {item[header.key] ?? ""}
              </TableCellStyled>
            ))}
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
}
