import { Card as MUICard, CardContent, Typography } from '@mui/material';
import type { CardProps } from '@/types/ui.types';
import { ICON_MAP } from '@/features/dashboard/constants/dashboard';

import './index.css';
import '@/styles/theme.css';

const Card: React.FC<CardProps> = ({ title, value, subtitle }) => {
  const Icon = title ? ICON_MAP[title as keyof typeof ICON_MAP] : null;
  return (
    <MUICard className="app-card">
      {Icon && <Icon sx={{ fontSize: 34 }} />}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h5" fontWeight={700}>
          {value}
        </Typography>

        <Typography variant="caption">{subtitle}</Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
