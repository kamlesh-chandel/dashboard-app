import './index.css';
import '@/styles/theme.css';

export const Button = ({ children, type = 'button', style, onClick }) => {
  return (
    <button className="app-btn" type={type} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
