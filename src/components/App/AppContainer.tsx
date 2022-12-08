import { FC, PropsWithChildren } from 'react';

import Container from '@mui/material/Container';
import { customStyles } from 'mui/customStyles';

const styles = customStyles({
  paddingTop: 12,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const AppContainer: FC<PropsWithChildren> = ({ children }) => (
  <Container component="main" maxWidth="lg" sx={styles}>
    {children}
  </Container>
);

export default AppContainer;
