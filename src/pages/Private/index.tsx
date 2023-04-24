
import { Navigate } from 'react-router-dom';
import { authUser } from '../../contexts/userContext';

export function Private({ children }: any) {

  const { user } = authUser();

  if (!user) {
    return <Navigate to={'/'} />;
  }
  return children;
}
