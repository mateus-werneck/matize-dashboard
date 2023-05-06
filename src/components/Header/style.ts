import styled from 'styled-components';

export const HeaderMainContainer = styled.div`
  display: block;
  height: 70px;
  margin-bottom: 20px;
  background: white;
  transition: opacity 1s ease-out;
  width: 100%;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  background: white;
  transition: opacity 1s ease-out;

  @media screen and (max-width: 540px) {
    justify-content: space-evenly;
  }
`;
