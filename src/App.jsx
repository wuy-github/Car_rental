import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Admin from "./Admin/Admin";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import CarDetail from "./pages/CarDetail";
import CarsList from "./pages/CarsList";
import Account from "./pages/Account";
import KyGuiXe from "./pages/KyGuiXe";
import { useAuth } from "./context/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth?.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function RequireAdmin({ children }) {
  // Allow direct access in development for local coding convenience
  if (import.meta.env.DEV) {
    return children;
  }
  const auth = useAuth();
  const location = useLocation();
  if (!auth?.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (auth.user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin/*"
          element={
            <RequireAdmin>
              <Admin />
            </RequireAdmin>
          }
        />

        <Route path="/cars" element={<CarsList />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/ky-gui-xe" element={<KyGuiXe />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
