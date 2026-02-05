import { Button } from '../../../../components/common/button';
import { Form } from '../../../../components/common/form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { loginFields } from '../../constants/loginFields';
import './index.css';

const getActions = () => {
  return (
    <>
      <Button type="button">Back</Button>
      <Button type="submit">Login</Button>
    </>
  );
};

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    const { email, password } = data;

    const DUMMY_USER = {
      email: 'admin@gmail.com',
      password: '123456',
    };

    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ email }));

      toast.success('Login Successfully');
      navigate('/dashboard');

    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <Form
          fields={loginFields}
          onSubmit={handleLogin}
          buttonText="Login"
          //actions={getActions()}
        />
      </div>
    </div>
  );
};
