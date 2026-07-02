import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import ProfileForm from '../../components/forms/ProfileForm';
import { useNavigate } from 'react-router-dom';

const EditEmployerProfilePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    await api.put('/employers/profile', form);
    navigate('/employer/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-4xl p-6">
        <h1 className="text-3xl font-bold">Edit Employer Profile</h1>
        <div className="mt-6">
          <ProfileForm type="employer" onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
};

export default EditEmployerProfilePage;
