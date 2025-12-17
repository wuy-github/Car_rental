import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Outlet là nơi nội dung của các trang (như HomePage) sẽ được "vẽ" ra */}
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
