import { FC, PropsWithChildren } from 'react';

import { CssBaseline } from '@mui/material';
import ThemeProvider from 'mui';
import StoreProvider from 'store';

export const TestWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <CssBaseline />
        {children}
      </StoreProvider>
    </ThemeProvider>
  );
};
