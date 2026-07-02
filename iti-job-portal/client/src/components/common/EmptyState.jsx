const EmptyState = ({ title = 'No data found', description = '' }) => {
  return (
    <div className="rounded border p-6 text-center bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
    </div>
  );
};

export default EmptyState;
