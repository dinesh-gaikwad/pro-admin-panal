import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import StatsCard from '../../components/dashboard/StatsCard';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import DataTable from '../../components/tables/DataTable';

const EmployerDashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/employers/dashboard');
      setDashboard(data.data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <LoadingSpinner />;

  const columns = [
    { key: 'title', label: 'Job', render: (row) => row.jobId?.title },
    { key: 'student', label: 'Student', render: (row) => row.studentId?.trade },
    { key: 'status', label: 'Status' },
    { key: 'location', label: 'Location', render: (row) => row.jobId?.location },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Employer Dashboard</h1>
          <Link to="/employer/jobs/new" className="rounded bg-black px-4 py-2 text-white">
            Post New Job
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <StatsCard label="Total Jobs" value={dashboard.totalJobs} />
          <StatsCard label="Total Applications" value={dashboard.totalApplications} />
          <StatsCard label="Shortlisted" value={dashboard.shortlisted} />
          <StatsCard label="Hired" value={dashboard.hired} />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Recent Applications</h2>
          <DataTable columns={columns} rows={dashboard.applications} />
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
