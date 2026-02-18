import type {
  ButtonHTMLAttributes,
  ChangeEvent,
  CSSProperties,
  ReactNode,
} from 'react';
import type { usersProps } from './user.types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'danger-outline' | string;
  style?: CSSProperties;
}

export interface InputProps {
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface CardProps {
  title: string;
  value?: number | string;
  subtitle?: string;
  onClick?: () => void;
}


export interface FormErrorsType {
  [key: string]: string;
}

export interface FormProps<T> {
  fields: FormField[];
  onSubmit: (data: T) => void;
  buttonText?: string;
  actions?: ReactNode;
}

export interface ErrorProps {
  children?: ReactNode;
}

export interface BarChartItem {
  label: string;
  value: number;
}

export interface BarChartProps {
  data: BarChartItem[];
}

export interface PageHeaderProps {
  title?: string;
}

export interface tableColumnProps {
  id: 'name' | 'email' | 'phone' | 'assignedGames' | 'actions';
  label: string;
  align?: 'center';
}

export interface UserDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateUserFormData) => void;
  mode?: 'add' | 'edit';
}

export interface FieldOption {
  label: string;
  value: string;
}

export interface FieldConfig {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  options?: FieldOption[];
}

export interface GamesOption {
  label: string;
  value: string;
}

export interface FormField {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  options?: GamesOption[];
}

export interface MultipleSelectChipOptionProps {
  label: string;
  value: string;
}

export interface MultipleSelectChipProps {
  label: string;
  value: string[];
  options?: MultipleSelectChipOptionProps[];
  onChange: (value: string[]) => void;
}

export interface LoginFormData {
  email: string;
  password: string;
  [key: string]: unknown;
}

export interface CreateUserFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  games: string[];
  [key: string]: unknown;
}

export interface UsersTableProps {
  users: usersProps[];
  isLoading: boolean;
}