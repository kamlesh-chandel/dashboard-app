import { Button } from '../../../../components/common/button';
import { Form } from '../../../../components/common/form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { LOGIN_FIELDS, DUMMY_USER } from '../../constants/loginConstants';
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
          fields={LOGIN_FIELDS}
          onSubmit={handleLogin}
          buttonText="Login"
          //actions={getActions()}
        />
      </div>
    </div>
  );
};
