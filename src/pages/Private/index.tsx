
import { Navigate } from 'react-router-dom';
import { authUser } from '../../contexts/userContext';

export function Private({ children }: {children:JSX.Element}) {

  const { user } = authUser();
  console.log('user Private', user);

  if (!user) {
    return <Navigate to={'/'} />;
  }
  return children;
}
