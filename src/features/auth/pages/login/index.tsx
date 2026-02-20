import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Form } from '@/components/common/form';
import type { LoginFormData } from '@/types/ui.types';
import { LOGIN_FIELDS } from '@/features/auth/constants/login';
import './index.css';
import { loginUser } from '@/services/auth.service';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormData) => {
    try {
      const { email, password } = data;

      const user = await loginUser(email, password);

      if (!user) {
        toast.error('Invalid email or password');
        return;
      }

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('Login Successfully');
      navigate('/dashboard');
    } catch {
      toast.error('Login failed');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <Form<LoginFormData>
          fields={LOGIN_FIELDS}
          onSubmit={handleLogin}
          buttonText="Login"
        />
      </div>
    </div>
  );
};
