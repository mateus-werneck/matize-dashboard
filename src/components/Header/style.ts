'use client';
import styled from 'styled-components';

export const HeaderMainContainer = styled.div`
  display: block;
  /* position: absolute; */
  height: 70px;
  margin-bottom: 20px;
  background: white;
  transition: opacity 1s ease-out;
  
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  background: white;
  transition: opacity 1s ease-out;

  @media screen and (max-width: 200px) {
    justify-content: space-evenly;
  }
`;
