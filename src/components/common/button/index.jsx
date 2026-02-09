import './index.css';
import '@/styles/theme.css';

export const Button = ({ children,className="", variant="primary", style, ...props }) => {
  return (
    <button className={`app-btn app-btn-${variant} ${className}`} style={style} {...props}>
      {children}
    </button>
  );
};
