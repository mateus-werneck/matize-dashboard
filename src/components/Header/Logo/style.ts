import Link from 'next/link';
import styled from 'styled-components';

export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 1.25rem;
  gap: 10px;

  @media screen and (max-width: 240px) {
    padding-left: 2.5rem;
  }

  @media screen and (max-width: 200px) {
    padding-left: 4rem;
  }

  button {
    min-height: 64px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  h2 {
    padding-left: 10px;
  }

  &:hover {
    transition: 1s;
    color: var(--pink-400);
  }
`;

export const LogoNameContainer = styled.div`
  @media screen and (max-width: 240px) {
    display: none;
  }
`;

export const LogoName = styled.h2`
  color: var(--pink-200);
  font-weight: bolder;
  font-size: 1.4rem;
`;
