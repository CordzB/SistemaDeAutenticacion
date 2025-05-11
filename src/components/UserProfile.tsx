import React, { useState } from 'react';
import useAuth from '../hooks/UseAuth'; 

const UserProfile: React.FC = () => {
  const { usuario, iniciarSesion, cerrarSesion } = useAuth(); 

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (nombreUsuario === 'carlos' && contraseña === '123456') {
      iniciarSesion(nombreUsuario);
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    cerrarSesion();
    setNombreUsuario(''); 
    setContraseña('');     
    setError('');          
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card shadow-sm p-4" style={{ width: '300px' }}>
        {usuario ? (
          <div className="text-center">
            <h2 className="text-success">¡Bienvenido, {usuario}!</h2>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        ) : (
          <div className="text-center">
            <h2>Inicia Sesión</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                value={nombreUsuario} 
                onChange={(e) => setNombreUsuario(e.target.value)} 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contraseña" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                value={contraseña} 
                onChange={(e) => setContraseña(e.target.value)} 
              />
            </div>

            <button className="btn btn-primary mt-3" onClick={handleLogin}>
              Iniciar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
