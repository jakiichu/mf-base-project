import { Navigate } from '@tanstack/react-router';

const NotFound = () => {
  return <Navigate to="/" replace />;
};

export { NotFound };
