const TextArea = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <textarea
        {...props}
        className="min-h-28 rounded border px-3 py-2 outline-none focus:border-black"
      />
    </div>
  );
};

export default TextArea;
