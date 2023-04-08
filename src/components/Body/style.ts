import styled from 'styled-components';

export const GlobalBody = styled.body``;

export const MainContainer = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;

 
`;

export const MainPanel = styled.div`
  margin-left: 251px;
  /* width: calc(100% - 260px); */
  border: 1px solid black;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 540px) {
    margin-left: 0;
    margin-top: 210px;
  }
`;
