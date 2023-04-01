import styled from 'styled-components';

export const HeaderLogoContainer = styled.div`
  display: flex;
  max-width: 250px;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 1.25rem;
  gap: 16px;

  @media screen and (max-width: 240px) {
    padding-left: 2.5rem;
  }

`;

export const LogoNameContainer = styled.div`
  @media screen and (max-width: 240px) {
    display: none;
  }

`

export const LogoName = styled.h2`
  color: var(--pink-200);
  font-weight: bolder;
  font-size: '1.35rem' 
`;
