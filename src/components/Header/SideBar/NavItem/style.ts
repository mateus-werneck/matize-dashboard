'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const NavBarLine = styled.li`
  /* margin-left: 1rem; */
  height: 40px;
  line-height: 1.8;
  transition: all .15s cubic-bezier(.07,.95,0,1);

  &:hover {
    filter: brightness(1.1);
  }
`

export const NavBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-left: 2.25rem;
    font-size:0.7rem; 
    color: var(--gray-500);
  }

  svg {
    margin-right: 0.5rem;
    color: var(--purple-150);
  }

`
