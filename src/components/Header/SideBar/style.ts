'use client';
import styled from 'styled-components';

interface ISiderBarContainer {
  customStyle: {
    maxWidth: string;
  }
}

interface IHeaderNavBar {
  customStyle: {
    alignItems: string;
  }
}

export const SideBarContainer = styled.nav<ISiderBarContainer>`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  background: var(--gray-20);
  transition: opacity 1s ease-out;

  max-width: ${({ customStyle }) => customStyle.maxWidth};

  @media screen and (max-width: 540px) {
    min-width: 100%;
    min-height: 10px;
    overflow: visible;
  }
`;

export const HeaderNavBar = styled.ul<IHeaderNavBar>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  background: var(--gray-20);
  padding-top: 1.25rem;
  transition: opacity 1s ease-out;

  align-items: ${({ customStyle }) => customStyle.alignItems};
`;
