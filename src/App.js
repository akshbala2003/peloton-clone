import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedHome from './components/ProtectedHome';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home/Home';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = (username, password) => {

    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password123';
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProtectedHome />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
