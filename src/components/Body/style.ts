import styled from 'styled-components';

export const MainPanel = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);

  @media screen and (max-width: 540px) {
    left: 0 !important;
    margin-left: 0;
    margin-top: 251px;
  }
`;
