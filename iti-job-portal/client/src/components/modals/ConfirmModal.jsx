const ConfirmModal = ({ open, title, message, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded bg-white p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{message}</p>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onCancel} className="rounded border px-4 py-2">
            Cancel
          </button>
          <button onClick={onConfirm} className="rounded bg-black px-4 py-2 text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
