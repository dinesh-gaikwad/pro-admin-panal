const JobFilters = ({ filters, setFilters, onSearch }) => {
  return (
    <div className="grid gap-3 rounded border bg-white p-4 md:grid-cols-4">
      <input
        value={filters.tradeSkill}
        onChange={(e) => setFilters({ ...filters, tradeSkill: e.target.value })}
        placeholder="Trade skill"
        className="rounded border px-3 py-2"
      />
      <input
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        placeholder="Location"
        className="rounded border px-3 py-2"
      />
      <select
        value={filters.jobType}
        onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
        className="rounded border px-3 py-2"
      >
        <option value="">All job types</option>
        <option value="apprenticeship">Apprenticeship</option>
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
        <option value="contract">Contract</option>
      </select>
      <button onClick={onSearch} className="rounded bg-black px-4 py-2 text-white">
        Search
      </button>
    </div>
  );
};

export default JobFilters;
