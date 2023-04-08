import styled from 'styled-components';

export const GlobalBody = styled.body`
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 70px);
`;

export const MainPanel = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);

  @media screen and (max-width: 540px) {
    left: 0 !important;
    margin-left: 0;
    margin-top: 251px;
  }
`;
