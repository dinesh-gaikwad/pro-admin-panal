const SelectInput = ({ label, children, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <select
        {...props}
        className="rounded border px-3 py-2 outline-none focus:border-black"
      >
        {children}
      </select>
    </div>
  );
};

export default SelectInput;
