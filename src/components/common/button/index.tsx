import type { ButtonProps } from '@/types/ui.types';

import './index.css';
import '@/styles/theme.css';

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button className={`app-btn app-btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};
