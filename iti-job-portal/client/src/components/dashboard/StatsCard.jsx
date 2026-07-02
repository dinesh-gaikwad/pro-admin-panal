const StatsCard = ({ label, value }) => {
  return (
    <div className="rounded border bg-white p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <h3 className="mt-2 text-2xl font-bold">{value}</h3>
    </div>
  );
};

export default StatsCard;
