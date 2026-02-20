import { Dialog as MuiDialog, DialogTitle, DialogContent } from '@mui/material';
import type { ReactNode } from 'react';
import './index.css';
import '@/styles/theme.css';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  maxHeight?: number | string | object;
}

const Dialog = ({
  open,
  onClose,
  title,
  children,
  maxWidth = 'xs',
  fullWidth = true,
  maxHeight,
}: DialogProps) => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      sx={{
        ...(maxHeight && { maxHeight }),
      }}
    >
      <div className="dialog-container">
        {title && <DialogTitle>{title}</DialogTitle>}

        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 1,
          }}
        >
          {children}
        </DialogContent>
      </div>
    </MuiDialog>
  );
};

export default Dialog;
