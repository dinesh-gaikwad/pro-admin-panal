const TextInput = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        {...props}
        className="rounded border px-3 py-2 outline-none focus:border-black"
      />
    </div>
  );
};

export default TextInput;
