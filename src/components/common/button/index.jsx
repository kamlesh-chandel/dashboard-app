import './index.css';
import '@/styles/theme.css';

export const Button = ({ children,className="", varient="primary", style, ...props }) => {
  return (
    <button className={`app-btn app-btn-${varient} ${className}`} style={style} {...props}>
      {children}
    </button>
  );
};
