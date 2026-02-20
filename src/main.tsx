import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProviderWrapper from '@/theme/theme-provider-wrapper';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </StrictMode>
);
