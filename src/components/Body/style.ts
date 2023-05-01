import styled from 'styled-components';

export interface IMainPainel {
  customstyle: {
    width: string;
    left: string;
  };
}

export const MainPanel = styled.div<IMainPainel>`
  display: flex;
  width: ${props => props.customstyle.width};
  left: ${props => props.customstyle.left};
  justify-content: center;
  position: relative;
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
