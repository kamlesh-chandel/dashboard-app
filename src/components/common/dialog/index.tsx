import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import type { ReactNode } from 'react';
import "./index.css";
import "@/styles/theme.css";

interface CommonDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

const CommonDialog: React.FC<CommonDialogProps> = ({
  open,
  onClose,
  title,
  children,
  maxWidth = 'xs',
  fullWidth = true,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      sx={{
        maxHeight: {
          xs: 580,
          md: 1000,
        },
      }}
    >
      <div className="app-dialog">
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
    </Dialog>
  );
};

export default CommonDialog;
