import Link from 'next/link';
import styled from 'styled-components';

export interface INavBarItemStyle {
  customstyle: {
    NavBarLink: {
      justifyContent: string;
      svg: {
        marginRight: string;
      };
    };
    NavBarLinkLabel: {
      marginLeft: string;
      fontSize: string;
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
  justify-content: ${({ customstyle }) =>
    customstyle.NavBarLink.justifyContent};

  @media screen and (max-width: 540px) {
    justify-content: space-evenly;
  }

  svg {
    margin-right: ${({ customstyle }) =>
      customstyle.NavBarLink.svg.marginRight};
    color: var(--purple-150);

    @media screen and (max-width: 540px) {
      margin-right:0.5rem;
    }
  }
`;

export const NavBarLinkLabel = styled.span<INavBarItemStyle>`
  display: block;
  margin-left: ${({ customstyle }) => customstyle.NavBarLinkLabel.marginLeft};
  font-size: ${({ customstyle }) => customstyle.NavBarLinkLabel.fontSize};
  color: var(--gray-500);

  @media screen and (max-width: 540px) {
    display: none;
    margin-left: 0 !important;
  }
`;
