export const LOGIN_FIELDS = [
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

export const DUMMY_USER = {
  email: 'admin@gmail.com',
  password: '123456',
};
