import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import StatsCard from '../../components/dashboard/StatsCard';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const AdminDashboard = () => {
  const [dataState, setDataState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/admin/dashboard');
      setDataState(data.data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Link to="/admin/moderation" className="rounded bg-black px-4 py-2 text-white">
            Open Moderation
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <StatsCard label="Users" value={dataState.users} />
          <StatsCard label="Jobs" value={dataState.jobs} />
          <StatsCard label="Employers" value={dataState.employers} />
          <StatsCard label="Applications" value={dataState.applications} />
        </div>

        <div className="mt-8 rounded border bg-white p-5">
          <h2 className="text-xl font-semibold">Moderation Summary</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <StatsCard label="Pending Jobs" value={dataState.pendingJobs} />
            <StatsCard label="Active Jobs" value={dataState.activeJobs} />
            <StatsCard label="Pending Employers" value={dataState.pendingEmployers} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
