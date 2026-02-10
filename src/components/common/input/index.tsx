import type { InputProps } from '@/types/ui.types';

import './index.css';
import '@/styles/theme.css';

export const Input: React.FC<InputProps> = ({ id, type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      className="app-input"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
