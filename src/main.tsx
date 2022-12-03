import { StrictMode } from 'react';

import { CssBaseline } from '@mui/material';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThemeProvider from 'theme';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <CssBaseline />
      App
    </ThemeProvider>
  </StrictMode>,
);
