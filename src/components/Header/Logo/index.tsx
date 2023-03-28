import Image from 'next/image';
import Link from 'next/link';
import { HeaderLogo } from '../style';

export const Logo = () => {
  const LogoImage = () => {
    return (
      <Link href={'/'} style={{ maxHeight: 48 }}>
        <Image
          src={'/favicon-96x96.png'}
          alt="matize-logo-header"
          width={48}
          height={48}
        />
      </Link>
    );
  };

  return (
    <HeaderLogo>
      <LogoImage />
      <h3 style={{ marginRight: '5px' }}>Matize</h3>
    </HeaderLogo>
  );
};
