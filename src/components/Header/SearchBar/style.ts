import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  margin-left: 30px;

  @media screen and (max-width: 540px) {
    display: none;
  }
`;
