import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px 60px 10px 20px;
  color: ${(props) => props.theme.primary};
  line-height: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  border:;
`;

export const TimeImageContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 1.25rem;

  cursor: pointer;
`;

export const TimeModalWrapper = styled.div`
  position: absolute;
`;
