import styled from "styled-components";

export const TablePaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.35rem;
  background: #fff;
  border-top: 1px solid ${(props) => props.theme.table.primary};
`;

export const FundsReportTableWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
`;
