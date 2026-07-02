import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../app/slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="w-full border-b bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="text-xl font-bold">ITI Job Portal</Link>

        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              {user?.role === 'student' && (
                <>
                  <Link to="/student/dashboard">Dashboard</Link>
                  <Link to="/student/profile/edit">Profile</Link>
                </>
              )}

              {user?.role === 'employer' && (
                <>
                  <Link to="/employer/dashboard">Dashboard</Link>
                  <Link to="/employer/jobs/new">Post Job</Link>
                  <Link to="/employer/profile/edit">Profile</Link>
                </>
              )}

              {user?.role === 'admin' && (
                <>
                  <Link to="/admin/dashboard">Dashboard</Link>
                  <Link to="/admin/moderation">Moderation</Link>
                </>
              )}

              <span className="text-sm text-gray-600">{user?.name}</span>
              <button onClick={handleLogout} className="rounded bg-black px-4 py-2 text-white">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
