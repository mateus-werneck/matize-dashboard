import styled from "styled-components";

export const DropDownButtonContainer = styled.div`
  display: block;
`;

export const DropDownNav = styled.nav`
  z-index: 1000;
  position: absolute;
  margin-top: 1rem;
  margin-left: -2.5rem;
  

  display: block;
  background: var(--gray-20);
  min-width: 10rem;

  border: none;
  border-radius: 5px;
  box-shadow: 0 3px 21px 0 rgba(0, 0, 0, 0.2);
`;

export const DropDownNavUl = styled.ul`
  display: block;
  background: var(--gray-20);
  padding: 1rem;
  transition: opacity 1s ease-out;

  border: none;
  border-radius: 5px;
`;

export const DropDownLine = styled.li`
  line-height: 1.8;
  text-indent: 10px;

  &:hover {
    filter: brightness(1.1);
  }
`;
