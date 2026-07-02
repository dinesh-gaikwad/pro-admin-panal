import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api/axios';
import { setCredentials } from '../../app/slices/authSlice';
import AuthForm from '../../components/forms/AuthForm';
import TextInput from '../../components/forms/TextInput';
import SelectInput from '../../components/forms/SelectInput';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
    trade: '',
    itiInstituteName: '',
    workshopName: '',
    location: '',
    contactNumber: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/auth/register', form);
      dispatch(setCredentials(data.data));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8">
      <AuthForm
        title="Register"
        onSubmit={handleSubmit}
        footer={<p className="text-sm">Already have an account? <Link to="/login" className="underline">Login</Link></p>}
      >
        {error && <div className="rounded bg-red-50 p-3 text-sm text-red-700">{error}</div>}
        <TextInput label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <TextInput label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <TextInput label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <SelectInput label="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="student">Student</option>
          <option value="employer">Employer</option>
        </SelectInput>

        {form.role === 'student' && (
          <>
            <TextInput label="Trade" value={form.trade} onChange={(e) => setForm({ ...form, trade: e.target.value })} />
            <TextInput label="ITI Institute Name" value={form.itiInstituteName} onChange={(e) => setForm({ ...form, itiInstituteName: e.target.value })} />
          </>
        )}

        {form.role === 'employer' && (
          <>
            <TextInput label="Workshop Name" value={form.workshopName} onChange={(e) => setForm({ ...form, workshopName: e.target.value })} />
          </>
        )}

        <TextInput label="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        <TextInput label="Contact Number" value={form.contactNumber} onChange={(e) => setForm({ ...form, contactNumber: e.target.value })} />

        <button className="w-full rounded bg-black px-4 py-2 text-white">Register</button>
      </AuthForm>
    </div>
  );
};

export default RegisterPage;
