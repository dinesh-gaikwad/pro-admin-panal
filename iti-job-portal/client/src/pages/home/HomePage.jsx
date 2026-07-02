import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import JobFilters from '../../components/filters/JobFilters';
import JobList from '../../components/jobs/JobList';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ tradeSkill: '', location: '', jobType: '' });

  const fetchJobs = async () => {
    setLoading(true);
    const params = Object.fromEntries(Object.entries(filters).filter(([, v]) => v));
    const { data } = await api.get('/jobs', { params });
    setJobs(data.data.jobs || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Find Jobs</h1>
            <p className="text-gray-600">Browse and apply to suitable opportunities.</p>
          </div>
          <Link to="/register" className="rounded bg-black px-4 py-2 text-white">
            Get Started
          </Link>
        </div>

        <JobFilters filters={filters} setFilters={setFilters} onSearch={fetchJobs} />

        <div className="mt-6">
          {loading ? <LoadingSpinner /> : <JobList jobs={jobs} />}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
