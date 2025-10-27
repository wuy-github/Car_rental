import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">BonbonCar</h2>
            <p className="text-sm">© 2025. Đã đăng ký bản quyền.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Chính sách
            </a>
            <a href="#" className="hover:text-white">
              Điều khoản
            </a>
            <a href="#" className="hover:text-white">
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
