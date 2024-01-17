import styled from "styled-components";

export const ButtonStyled = styled.button`
    padding: 10px 35px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text.default};
    font-weight: bold;
    border: none;
    border-radius: 4px;
    font-size: 0.875rem;
    cursor: pointer;
`;
