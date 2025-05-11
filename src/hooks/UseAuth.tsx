import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../context/AuthContext';

const useAuth = (): AuthContextType => {
  const contexto = useContext(AuthContext);
  if (!contexto) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return contexto;
};

export default useAuth;
