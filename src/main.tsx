import { StrictMode } from 'react';

import { CssBaseline } from '@mui/material';
import ThemeProvider from 'mui';
import ReactDOM from 'react-dom/client';
import StoreProvider from 'store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <StoreProvider>
        <CssBaseline />
        App
      </StoreProvider>
    </ThemeProvider>
  </StrictMode>,
);
