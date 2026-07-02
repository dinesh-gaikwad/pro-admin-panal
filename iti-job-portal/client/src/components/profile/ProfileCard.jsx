const ProfileCard = ({ title, children, actions }) => {
  return (
    <div className="rounded border bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {actions}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default ProfileCard;
