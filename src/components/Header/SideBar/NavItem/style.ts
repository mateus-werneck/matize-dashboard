import Link from 'next/link';
import styled from 'styled-components';

export interface INavLabelStyle {
  customProps: {
    display: string;
    marginLeft: string;
    fontSize: string;
  };
}

export const NavBarLine = styled.li`
  height: 40px;
  line-height: 1.8;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const NavBarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 30px;

  svg {
    color: var(--purple-150);

    @media screen and (max-width: 540px) {
      margin-right: 0.5rem;
    }
  }
`;

export const NavBarLinkLabel = styled.span<INavLabelStyle>`
  display: ${({ customProps }) => customProps.display};
  margin-left: ${({ customProps }) => customProps.marginLeft};
  font-size: ${({ customProps }) => customProps.fontSize};
  color: var(--gray-500);

  @media screen and (max-width: 540px) {
    display: none;
    margin-left: 0 !important;
  }
`;
