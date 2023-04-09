import styled from 'styled-components';

export const MainPanel = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  left: 250px;
  min-height: calc(100vh - 70px);

  @media screen and (max-width: 540px) {
    flex-direction: row;
    min-height: calc(100vh - 227.5px);
    width: 100%;
    top: 227px;
    left: 0 !important;
    margin-left: 0;
  }
`;
