const StatusBadge = ({ status }) => {
  const styles = {
    applied: 'bg-blue-50 text-blue-700',
    under_review: 'bg-yellow-50 text-yellow-700',
    shortlisted: 'bg-green-50 text-green-700',
    rejected: 'bg-red-50 text-red-700',
    hired: 'bg-emerald-50 text-emerald-700',
    withdrawn: 'bg-gray-100 text-gray-700',
    active: 'bg-green-50 text-green-700',
    closed: 'bg-red-50 text-red-700',
    paused: 'bg-yellow-50 text-yellow-700',
    pending: 'bg-yellow-50 text-yellow-700',
    approved: 'bg-green-50 text-green-700',
  };

  return (
    <span className={`rounded px-2 py-1 text-xs font-medium ${styles[status] || 'bg-gray-100 text-gray-700'}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
