import {
  HeaderLogoContainer,
  LogoName,
  LogoNameContainer
} from '@Components/Header/Logo/style';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <HeaderLogoContainer>
      <LogoImage />
      <LogoNameContainer>
        <LogoName>Matize</LogoName>
      </LogoNameContainer>
    </HeaderLogoContainer>
  );
};

const LogoImage = () => {
  return (
    <Link href={'/'} style={{ maxHeight: 64, marginBottom: '7px' }}>
      <Image
        src={'/android-icon-192x192-removebg.png'}
        alt="matize-logo-header"
        width={64}
        height={64}
      />
    </Link>
  );
};
