import JobCard from './JobCard';
import EmptyState from '../common/EmptyState';

const JobList = ({ jobs = [], onApply, onSave, savedJobs = [] }) => {
  if (!jobs.length) {
    return <EmptyState title="No jobs found" description="Try adjusting your filters." />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          onApply={onApply}
          onSave={onSave}
          saved={savedJobs.includes(job._id)}
        />
      ))}
    </div>
  );
};

export default JobList;
