import React, { createContext, useState, ReactNode, useEffect } from 'react';

export interface AuthContextType {
  usuario: string | null;
  iniciarSesion: (nombre: string) => void;
  cerrarSesion: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const storedUser = localStorage.getItem('usuario');
  const [usuario, setUsuario] = useState<string | null>(storedUser);

  const iniciarSesion = (nombre: string) => {
    setUsuario(nombre);
    localStorage.setItem('usuario', nombre); 
  };

  const cerrarSesion = () => {
    setUsuario(null);
    localStorage.removeItem('usuario'); 
  };

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
