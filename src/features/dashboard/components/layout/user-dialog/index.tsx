import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import type { UserDialogProps } from '@/types/ui.types';

import './index.css';
import '@/styles/theme.css';

import { USER_FIELDS } from '@/features/dashboard/constants/users';
import { Form } from '@/components/common/form';

const UserDialog: React.FC<UserDialogProps> = ({
  open,
  onClose,
  onSubmit,
  mode = 'add',
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      sx={{
        maxHeight: {
          xs: 580,
          md: 1000,
        },
      }}
    >
      <div className="user-dialog">
        <DialogTitle>
          {mode === 'edit' ? 'Edit User' : 'Add New User'}
        </DialogTitle>

        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
        >
          <Form
            fields={USER_FIELDS}
            onSubmit={onSubmit}
            buttonText={mode === 'edit' ? 'Update User' : 'Add User'}
          />
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default UserDialog;
