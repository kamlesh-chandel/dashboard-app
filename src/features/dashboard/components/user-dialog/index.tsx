import CommonDialog from '@/components/common/dialog';
import { Form } from '@/components/common/form';
import { USER_FIELDS } from '@/features/dashboard/constants/users';

import type { UserDialogProps } from '@/types/ui.types';

const UserDialog: React.FC<UserDialogProps> = ({
  open,
  onClose,
  onSubmit,
  mode = 'add',
}) => {
  return (
    <CommonDialog
      open={open}
      onClose={onClose}
      title={mode === 'edit' ? 'Edit User' : 'Add New User'}
      maxWidth="xs"
      fullWidth
    >
      <div>
        <Form
          fields={USER_FIELDS}
          onSubmit={onSubmit}
          buttonText={mode === 'edit' ? 'Update User' : 'Add User'}
        />
      </div>
    </CommonDialog>
  );
};

export default UserDialog;
