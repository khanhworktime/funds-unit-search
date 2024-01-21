import styled from "styled-components";

export const TableHeaderStyled = styled.th`
  background-color: ${(props) => props.theme.table.primary};
  color: ${(props) => props.theme.text.default};
  font-weight: bold;
  padding: 14px 32px;

  text-align: center;

  border-left: 1px solid ${(props) => props.theme.text.default};

  &:first-child {
    text-align: start;
    border-left: none;
  }
`;

export const TableCellStyled = styled.td`
  padding: 14px 32px;
  font-weight: 500;
  background: #ffffff;

  text-align: center;

  border-left: 1px solid ${(props) => props.theme.table.primary};

  &:first-child {
    text-align: start;
    border-left: none;
  }

  border-bottom: 1px solid ${(props) => props.theme.table.primary};

  tr:last-child > & {
    border-bottom: none;
  }

  &.hasHeaderColumn {
    background-color: ${(props) => props.theme.table.secondary};
    color: ${(props) => props.theme.primary};
    font-weight: bold;
  }

  &.cellTextEmphasis {
    color: ${(props) => props.theme.primary};
  }
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 4px;
  overflow: hidden;
`;
