import './index.css';
import '@/styles/theme.css';

export const Button = ({ children, type = 'button', style }) => {
  return (
    <button className="app-btn" type={type} style={style}>
      {children}
    </button>
  );
};
