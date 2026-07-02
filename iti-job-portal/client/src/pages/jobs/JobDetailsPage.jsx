import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/jobs/${id}`);
      setJob(data.data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-4xl p-6">
        <div className="rounded border bg-white p-6">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <p className="mt-2 text-gray-600">{job.tradeSkill} • {job.location}</p>
          <p className="mt-6 whitespace-pre-line text-gray-700">{job.description}</p>

          <div className="mt-6 flex gap-3">
            <Link to={`/jobs/${job._id}/apply`} className="rounded bg-black px-4 py-2 text-white">
              Apply Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetailsPage;
