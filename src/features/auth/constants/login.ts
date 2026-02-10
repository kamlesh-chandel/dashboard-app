import type { LoginField, DummyUser } from '@/types/authForm.types';

export const LOGIN_FIELDS: LoginField[] = [
  {
    id: 'email',
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter email',
    required: true,
  },
  {
    id: 'password',
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter password',
    required: true,
    minLength: 6,
  },
];

export const DUMMY_USER: DummyUser = {
  email: 'admin@gmail.com',
  password: '123456',
};
