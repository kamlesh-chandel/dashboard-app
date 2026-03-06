import type { FormDataType } from '@/types/ui.types';

export interface UserDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormDataType) => void;
  mode?: 'add' | 'edit';
}
