import React from 'react';
import { AuthProvider } from '../src/context/AuthContext'; 
import Header from '../src/components/Header'; 
import UserProfile from '../src/components/UserProfile';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Header />
      <UserProfile />
    </AuthProvider>
  );
};

export default App;
