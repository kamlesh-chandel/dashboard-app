import { Card as MUICard, CardContent, Typography } from '@mui/material';
import type { CardProps } from '@/types/ui.types';
import { ICON_MAP } from '@/features/dashboard/constants/dashboard';

import './index.css';
import '@/styles/theme.css';

const Card = ({ title, value, subtitle, onClick }: CardProps) => {
  const Icon = title ? ICON_MAP[title as keyof typeof ICON_MAP] : null;
  return (
    <MUICard className="app-card" onClick={onClick}>
      {Icon && (
        <Icon
          sx={{
            fontSize: {
              sm: 26,
              md: 34,
            },
          }}
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h5" fontWeight={700}>
          {value}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          {subtitle}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
