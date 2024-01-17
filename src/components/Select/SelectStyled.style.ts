import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const SelectStyled = styled.select`
  padding: 10px 60px 10px 20px;
  color: ${(props) => props.theme.primary};
  width: 100%;
  line-height: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  // Clear caret
  -moz-appearance: none;
  -webkit-appearance: none;

  ::-ms-expand {
    display: none;
  }
`;

export const OptionStyle = styled.option`
  width: 100%;
`;

export const DefaultOptionStyled = styled(OptionStyle)`
  display: none;
`;

export const CaretImageContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 1.25rem;
`;
