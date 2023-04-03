import { Button } from '@mui/material';
import styled from 'styled-components';

export const StyledMatizeButton = styled(Button)`
  &:hover {
    transition: 1s;
    background: none;

    svg {
      color: black;
      transition: 1s;
    }
  }
`;
