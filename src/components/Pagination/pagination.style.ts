import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 1.125rem;
`;

export const PageNumberWrapper = styled.div`
  display: flex;
`;

export const PageNumberButtonWrapper = styled.button`
  background: #fff;
  font-weight: bold;
  aspect-ratio: 1;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &.active {
    color: ${(props) => props.theme.primary};
  }
`;

export const PaginationControllerWrapper = styled.button`
  border-radius: 4px;
  background: ${(props) => props.theme.primary};
  aspect-ratio: 1;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  //	Caret UI balancing

  &:first-child > svg {
    margin-left: -2px;
  }

  &:last-child > svg {
    margin-right: -2px;
  }
`;
