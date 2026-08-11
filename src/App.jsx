import React, { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import "./styles/dashboard-global.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NewEmployeesPage from "./pages/NewEmployees/NewEmployeesPage";
import Settings from "./pages/MailSettings/MailSettings";
import NewEmployeeMailSettings from "./pages/NewEmployeeMailSettings/NewEmployeeMailSettings";
import Login from "./pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";
import HelpPage from "./pages/HelpPage/HelpPage";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          !user ? (
            <Login onLoginSuccess={handleLoginSuccess} />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/"
        element={
          user ? (
            <Layout user={user}>
              <Home />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/users"
        element={
          user ? (
            <Layout user={user}>
              <UserPage />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/new-employees"
        element={
          user ? (
            <Layout user={user}>
              <NewEmployeesPage />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/settings"
        element={
          user ? (
            <Layout user={user}>
              <Settings />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/settings/new-employees"
        element={
          user ? (
            <Layout user={user}>
              <NewEmployeeMailSettings />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/ayuda"
        element={
          user ? (
            <Layout user={user}>
              <HelpPage />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
