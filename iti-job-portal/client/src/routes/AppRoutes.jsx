import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import JobDetailsPage from '../pages/jobs/JobDetailsPage';
import ApplyJobPage from '../pages/jobs/ApplyJobPage';
import StudentDashboard from '../pages/student/StudentDashboard';
import EditStudentProfilePage from '../pages/student/EditStudentProfilePage';
import EmployerDashboard from '../pages/employer/EmployerDashboard';
import PostJobPage from '../pages/employer/PostJobPage';
import EditEmployerProfilePage from '../pages/employer/EditEmployerProfilePage';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ModerationPage from '../pages/admin/ModerationPage';

const ProtectedRoute = ({ children, roles }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (roles && user && !roles.includes(user.role)) return <Navigate to="/" replace />;

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/jobs/:id" element={<JobDetailsPage />} />

      <Route
        path="/jobs/:id/apply"
        element={
          <ProtectedRoute roles={['student', 'admin']}>
            <ApplyJobPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute roles={['student', 'admin']}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/profile/edit"
        element={
          <ProtectedRoute roles={['student', 'admin']}>
            <EditStudentProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employer/dashboard"
        element={
          <ProtectedRoute roles={['employer', 'admin']}>
            <EmployerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employer/jobs/new"
        element={
          <ProtectedRoute roles={['employer', 'admin']}>
            <PostJobPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employer/profile/edit"
        element={
          <ProtectedRoute roles={['employer', 'admin']}>
            <EditEmployerProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute roles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/moderation"
        element={
          <ProtectedRoute roles={['admin']}>
            <ModerationPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
