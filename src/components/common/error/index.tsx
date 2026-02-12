import type { ErrorProps } from '@/types/ui.types';

import './index.css';
import '@/styles/theme.css';

export const Error: React.FC<ErrorProps> = ({ children }) => {
  return <span className="app-error">{children}</span>;
};
