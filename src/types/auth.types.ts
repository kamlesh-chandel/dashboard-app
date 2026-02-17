export interface LoginField {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
}

export interface DummyUser {
  email: string;
  password: string;
}

export type authCheck = () => boolean;
