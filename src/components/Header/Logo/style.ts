import Link from 'next/link';
import styled from 'styled-components';

export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 1.25rem;
  gap: 10px;

  @media screen and (max-width: 540px) {
    padding-left: 3.5rem;
    justify-content: center;
    align-items: center;
    min-width: 100%;
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

  @media screen and (max-width: 540px) {
    justify-content: center;
  }

  h2 {
    padding-left: 10px;
  }

  &:hover {
    transition: 1s;
    color: var(--pink-400);
  }
`;

export const LogoNameContainer = styled.div`
  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const LogoName = styled.h2`
  color: var(--pink-200);
  font-weight: bolder;
  font-size: 1.4rem;
`;
