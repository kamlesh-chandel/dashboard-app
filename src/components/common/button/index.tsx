import type { ButtonProps } from '@/types/ui.types';

import './index.css';
import '@/styles/theme.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  style,
  ...props
}) => {
  return (
    <button
      className={`app-btn app-btn-${variant} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};
