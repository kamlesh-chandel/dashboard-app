import './index.css';
import '@/styles/theme.css';

export const Button = ({ children,className="", varient="primary", ...props }) => {
  return (
    <button className={`app-btn app-btn-${varient} ${className}`} {...props}>
      {children}
    </button>
  );
};
