import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import JobForm from '../../components/forms/JobForm';
import { useNavigate } from 'react-router-dom';

const PostJobPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    await api.post('/jobs', {
      ...form,
      employerId: JSON.parse(localStorage.getItem('user'))?._id,
    });
    navigate('/employer/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-4xl p-6">
        <h1 className="text-3xl font-bold">Post a Job</h1>
        <div className="mt-6">
          <JobForm onSubmit={handleSubmit} submitLabel="Create Job" />
        </div>
      </main>
    </div>
  );
};

export default PostJobPage;
