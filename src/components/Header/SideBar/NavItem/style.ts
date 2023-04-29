'use client';
import Link from 'next/link';
import styled from 'styled-components';

export interface INavBarItemStyle {
  customStyle: {
    NavBarLink: {
      justifyContent: string;
      svg: {
        marginRight: string;
      };
    };
    NavBarLinkLabel: {
      marginLeft: string;
    };
  };
}

export const NavBarLine = styled.li`
  height: 40px;
  line-height: 1.8;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const NavBarLink = styled(Link)<INavBarItemStyle>`
  display: flex;
  align-items: center;
  justify-content: ${({ customStyle }) =>
    customStyle.NavBarLink.justifyContent};

  @media screen and (max-width: 540px) {
    justify-content: space-evenly;
  }

  svg {
    margin-right: ${({ customStyle }) =>
      customStyle.NavBarLink.svg.marginRight};
    color: var(--purple-150);
  }
`;

export const NavBarLinkLabel = styled.span<INavBarItemStyle>`
  display: block;
  margin-left: ${({ customStyle }) => customStyle.NavBarLinkLabel.marginLeft};
  font-size: 0.7rem;
  color: var(--gray-500);

  @media screen and (max-width: 540px) {
    display: none;
  }
`;
