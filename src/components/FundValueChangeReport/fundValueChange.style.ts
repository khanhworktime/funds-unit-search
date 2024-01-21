import styled from "styled-components";

export const FundValueChangeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  background: #fff;
  border-collapse: collapse;
  border-radius: 4px;
  overflow: hidden;
`;

export const FundValueChangeHeader = styled.div`
  background: ${(props) => props.theme.table.primary};
  font-weight: bold;
  color: ${(props) => props.theme.text.default};
  text-align: center;
  padding: 0.875rem;
  grid-column: span 3 / span 3;
`;

export const FundValueChangeContentWrapper = styled.div`
  padding: 15px 30px;
  position: relative;

  color: ${(props) => props.theme.text.primary};
  display: flex;
  flex-direction: column;

  & h3 {
    font-size: 24px;
    font-weight: 500;
  }

  & > .statisticItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  & > .chartWrapper {
    height: 160px;
  }

  & > .chartWrapper canvas {
    width: 100%;
  }
`;

export const SeparateLine = styled.div`
  background: ${(props) => props.theme.table.primary};
`;
