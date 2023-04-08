import styled from "styled-components";

export const StyledMatizeInput = styled.input`
    margin-bottom: ${(props) => (props['hasErrors'] ? '0.3rem': 0)};
    font-size: 0.75rem;
    color: var(--gray-500);

`
export const StyledMatizeLabel = styled.label`
    font-size: 0.8rem;
    color: gray;


`

export const StyledMatizeAlertInput = styled.span`
    text-indent: 0.4rem;
    font-size: 0.5rem;
    color: red;
`
