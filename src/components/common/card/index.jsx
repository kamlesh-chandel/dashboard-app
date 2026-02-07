import './index.css';
import "@/styles/theme.css";

const Card = ({ title, value, subtitle }) => {
  return (
    <div className="app-card">
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
      <div className="card-subtitle">{subtitle}</div>
    </div>
  );
};

export default Card;
