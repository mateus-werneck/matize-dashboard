import styled from 'styled-components';

export const GlobalBody = styled.body``;

export const MainContainer = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: row;
  padding-left: 0;
  padding-right: 0;
  /* align-items: center; */
  /* justify-content: space-between; */

  @media screen and (max-width: 540px) {
    display: block;
  }
`;

export const MainPanel = styled.div`
  padding-top: 70px;
  width: calc(100% - 260px);
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
