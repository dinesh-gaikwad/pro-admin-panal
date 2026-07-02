import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import TextArea from '../../components/forms/TextArea';
import ApplyButton from '../../components/actions/ApplyButton';

const ApplyJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coverLetter, setCoverLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleApply = async () => {
    setLoading(true);
    setError('');
    try {
      await api.post('/applications', {
        jobId: id,
        studentId: JSON.parse(localStorage.getItem('user'))?._id,
        coverLetter,
      });
      navigate('/student/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Application failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="text-3xl font-bold">Apply for Job</h1>
        <div className="mt-6 rounded border bg-white p-5">
          {error && <div className="mb-4 rounded bg-red-50 p-3 text-sm text-red-700">{error}</div>}
          <TextArea
            label="Cover Letter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Write a short cover letter..."
          />
          <div className="mt-4">
            <ApplyButton onClick={handleApply} loading={loading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplyJobPage;
