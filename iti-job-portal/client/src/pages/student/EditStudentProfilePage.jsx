import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import ProfileForm from '../../components/forms/ProfileForm';
import { useNavigate } from 'react-router-dom';

const EditStudentProfilePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    await api.put('/students/profile', form);
    navigate('/student/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-4xl p-6">
        <h1 className="text-3xl font-bold">Edit Student Profile</h1>
        <div className="mt-6">
          <ProfileForm type="student" onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
};

export default EditStudentProfilePage;
