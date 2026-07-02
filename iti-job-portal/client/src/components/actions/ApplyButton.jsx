const ApplyButton = ({ onClick, loading = false, label = 'Apply Now' }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="rounded bg-black px-4 py-2 text-sm text-white disabled:opacity-60"
    >
      {loading ? 'Applying...' : label}
    </button>
  );
};

export default ApplyButton;
