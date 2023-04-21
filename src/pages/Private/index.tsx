import { Navigate, useNavigate } from 'react-router-dom';
import { authUser } from '../../contexts/userContext';
import React from 'react';





export function Private({ children }: any) {
  const navigate = useNavigate();
  const { user } = authUser();

  if (!user) {
    return <Navigate to={'/'} />;
  }
  return children;
}
