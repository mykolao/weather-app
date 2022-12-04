import { FC, PropsWithChildren } from 'react';

import { AppBar } from '@mui/material';
import { Container, SxProps } from '@mui/system';
import Logo from 'components/Logo';

const containerStyles: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 8px',
};

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppBar>
      <Container maxWidth="lg" sx={containerStyles}>
        <Logo />
        {children}
      </Container>
    </AppBar>
  );
};
