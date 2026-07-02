import { Link } from 'react-router-dom';

const JobCard = ({ job, onApply, onSave, saved = false }) => {
  return (
    <div className="rounded border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.tradeSkill} • {job.location}</p>
        </div>
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">{job.jobType}</span>
      </div>

      <p className="mt-3 text-sm text-gray-700 line-clamp-3">{job.description}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
        <span>Vacancies: {job.vacancies}</span>
        <span>Status: {job.status}</span>
        <span>Approved: {job.isApproved ? 'Yes' : 'No'}</span>
      </div>

      <div className="mt-5 flex gap-3">
        <Link to={`/jobs/${job._id}`} className="rounded border px-4 py-2 text-sm">
          View
        </Link>
        {onApply && (
          <button onClick={() => onApply(job)} className="rounded bg-black px-4 py-2 text-sm text-white">
            Apply
          </button>
        )}
        {onSave && (
          <button onClick={() => onSave(job)} className="rounded border px-4 py-2 text-sm">
            {saved ? 'Saved' : 'Save'}
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
