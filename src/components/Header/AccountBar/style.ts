import Link from 'next/link';
import styled from 'styled-components';

export const AccountBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 0.5rem;
  }

  span {
    font-size: 0.8rem;
  }
`;

export const StyledProfileButton = styled(Link)`
  font-size: 0.8rem;
  color: black;
`;
