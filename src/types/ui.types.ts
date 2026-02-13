import type {
  ButtonHTMLAttributes,
  ChangeEvent,
  CSSProperties,
  ReactNode,
} from 'react';
import type { LoginField } from '@/types/auth.types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'danger-outline' | string;
  style?: CSSProperties;
}

export interface InputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface CardProps {
  title: string;
  value?: number | string;
  subtitle?: string;
}

export interface FormDataType {
  [key: string]: string;
}

export interface FormErrorsType {
  [key: string]: string;
}

export interface FormProps {
  fields: LoginField[];
  onSubmit: (data: FormDataType) => void;
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
