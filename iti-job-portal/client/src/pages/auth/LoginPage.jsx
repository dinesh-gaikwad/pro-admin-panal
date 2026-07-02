import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api/axios';
import { setCredentials } from '../../app/slices/authSlice';
import AuthForm from '../../components/forms/AuthForm';
import TextInput from '../../components/forms/TextInput';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/auth/login', form);
      dispatch(setCredentials(data.data));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <AuthForm
        title="Login"
        onSubmit={handleSubmit}
        footer={<p className="text-sm">No account? <Link to="/register" className="underline">Register</Link></p>}
      >
        {error && <div className="rounded bg-red-50 p-3 text-sm text-red-700">{error}</div>}
        <TextInput
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          required
        />
        <TextInput
          label="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="********"
          required
        />
        <button className="w-full rounded bg-black px-4 py-2 text-white">Login</button>
      </AuthForm>
    </div>
  );
};

export default LoginPage;
