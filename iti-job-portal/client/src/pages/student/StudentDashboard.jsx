import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import StatsCard from '../../components/dashboard/StatsCard';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const StudentDashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/students/dashboard');
      setDashboard(data.data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <Link to="/student/profile/edit" className="rounded bg-black px-4 py-2 text-white">
            Edit Profile
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <StatsCard label="Total Applications" value={dashboard.totalApplications} />
          <StatsCard label="Shortlisted" value={dashboard.shortlisted} />
          <StatsCard label="Rejected" value={dashboard.rejected} />
          <StatsCard label="Hired" value={dashboard.hired} />
        </div>

        <div className="mt-8 rounded border bg-white p-5">
          <h2 className="text-xl font-semibold">Applications</h2>
          <div className="mt-4 space-y-4">
            {dashboard.applications.map((app) => (
              <div key={app._id} className="rounded border p-4">
                <p className="font-semibold">{app.jobId?.title}</p>
                <p className="text-sm text-gray-600">{app.jobId?.tradeSkill} • {app.jobId?.location}</p>
                <p className="mt-2 text-sm">Status: {app.status}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
