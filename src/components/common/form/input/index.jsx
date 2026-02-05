import './index.css';
import '../../../../styles/theme.css';

export const Input = ({ id, type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      className="app-input"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
