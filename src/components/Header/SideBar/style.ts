'use client';
import styled from 'styled-components';

export const SideBarContainer = styled.nav`
  display: block;
  min-height: calc(100vh - 70px);
  background: var(--gray-20);
  transition: opacity 1s ease-out;

  @media screen and (max-width: 540px) {
    min-height: 10px;
    overflow: visible;
  }
`;

export const HeaderNavBar = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  background: var(--gray-20);
  padding-top: 1.25rem;
  transition: opacity 1s ease-out;

  @media screen and (max-width: 540px) {
    align-items: center;
    width: 180%;
  }
`;
