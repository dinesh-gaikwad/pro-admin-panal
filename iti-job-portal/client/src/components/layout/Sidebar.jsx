import { Link } from 'react-router-dom';

const Sidebar = ({ items = [] }) => {
  return (
    <aside className="w-64 border-r min-h-screen p-4 bg-gray-50">
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <Link key={item.path} to={item.path} className="px-3 py-2 rounded hover:bg-gray-200">
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
