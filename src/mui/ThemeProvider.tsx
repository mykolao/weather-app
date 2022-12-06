import { FC, PropsWithChildren } from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from 'mui/theme';

export const ThemeProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  );
};
