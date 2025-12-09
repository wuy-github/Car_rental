import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Admin from "./Admin/Admin";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import CarDetail from "./pages/CarDetail";
import CarsList from "./pages/CarsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/cars" element={<CarsList />} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
