const AuthForm = ({ title, children, onSubmit, footer }) => {
  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md rounded border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-6 space-y-4">{children}</div>
      <div className="mt-6">{footer}</div>
    </form>
  );
};

export default AuthForm;
