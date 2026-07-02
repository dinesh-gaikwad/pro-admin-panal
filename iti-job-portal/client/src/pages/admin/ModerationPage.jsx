import { useEffect, useState } from 'react';
import api from '../../api/axios';
import Navbar from '../../components/layout/Navbar';
import DataTable from '../../components/tables/DataTable';
import StatusBadge from '../../components/actions/StatusBadge';
import ConfirmModal from '../../components/modals/ConfirmModal';

const ModerationPage = () => {
  const [jobs, setJobs] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [confirm, setConfirm] = useState({ open: false, type: '', id: null, action: null });

  const loadData = async () => {
    const [jobsRes, employersRes] = await Promise.all([
      api.get('/admin/jobs/pending'),
      api.get('/admin/employers/pending'),
    ]);
    setJobs(jobsRes.data.data);
    setEmployers(employersRes.data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const doAction = async () => {
    if (!confirm.action) return;
    await api.patch(confirm.action);
    setConfirm({ open: false, type: '', id: null, action: null });
    loadData();
  };

  const jobColumns = [
    { key: 'title', label: 'Title' },
    { key: 'tradeSkill', label: 'Trade' },
    { key: 'location', label: 'Location' },
    { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.isApproved ? 'approved' : row.status} /> },
    {
      key: 'actions',
      label: 'Actions',
      render: (row) => (
        <div className="flex gap-2">
          <button onClick={() => setConfirm({ open: true, action: `/admin/jobs/${row._id}/approve` })} className="rounded bg-black px-3 py-1 text-white">
            Approve
          </button>
          <button onClick={() => setConfirm({ open: true, action: `/admin/jobs/${row._id}/reject` })} className="rounded border px-3 py-1">
            Reject
          </button>
        </div>
      ),
    },
  ];

  const employerColumns = [
    { key: 'workshopName', label: 'Workshop' },
    { key: 'location', label: 'Location' },
    { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.verificationStatus} /> },
    {
      key: 'actions',
      label: 'Actions',
      render: (row) => (
        <div className="flex gap-2">
          <button onClick={() => setConfirm({ open: true, action: `/admin/employers/${row._id}/approve` })} className="rounded bg-black px-3 py-1 text-white">
            Approve
          </button>
          <button onClick={() => setConfirm({ open: true, action: `/admin/employers/${row._id}/reject` })} className="rounded border px-3 py-1">
            Reject
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl p-6 space-y-8">
        <section>
          <h1 className="text-3xl font-bold">Moderation</h1>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Pending Jobs</h2>
          <DataTable columns={jobColumns} rows={jobs} />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Pending Employers</h2>
          <DataTable columns={employerColumns} rows={employers} />
        </section>
      </main>

      <ConfirmModal
        open={confirm.open}
        title="Confirm Action"
        message="Are you sure you want to continue?"
        onConfirm={doAction}
        onCancel={() => setConfirm({ open: false, type: '', id: null, action: null })}
      />
    </div>
  );
};

export default ModerationPage;
