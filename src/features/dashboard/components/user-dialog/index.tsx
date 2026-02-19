import Dialog from '@/components/common/dialog';
import { Form } from '@/components/common/form';
import { USER_FIELDS } from '@/features/dashboard/constants/users';

import type { UserDialogProps } from '@/types/ui.types';

const UserDialog = ({
  open,
  onClose,
  onSubmit,
  mode = 'add',
}: UserDialogProps) => {
  const isEditMode = mode === 'edit';
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={isEditMode ? 'Edit User' : 'Add New User'}
      maxWidth="xs"
      fullWidth
      maxHeight={{ xs: 580, md: 1000 }}
    >
        <Form
          fields={USER_FIELDS}
          onSubmit={onSubmit}
          buttonText={isEditMode ? 'Update User' : 'Add User'}
        />
    </Dialog>
  );
};

export default UserDialog;
