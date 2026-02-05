import './index.css';
import '../../../styles/theme.css';

export const Button = ({ children, type = 'button' }) => {
  return (
    <button className="app-btn" type={type}>
      {children}
    </button>
  );
};
