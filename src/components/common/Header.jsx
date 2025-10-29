import React, { useState } from "react";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* -------------------- DESKTOP MENU -------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. Logo (Bên trái) */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Tonicar
            </a>
          </div>

          {/* 2. Nav Links (Ở giữa - Ẩn trên di động) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-gray-900 font-medium"
            >
              Hồ Chí Minh
              <ChevronDownIcon className="h-5 w-5 ml-1 text-gray-500" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Ký gửi xe
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Blog
            </a>
          </div>

          {/* 3. Login Button (Bên phải - Ẩn trên di động) */}
          <div className="hidden md:block">
            <a
              href="#"
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-3xl font-medium hover:bg-gray-300 hover:text-gray-900 transition-colors"
            >
              Đăng nhập
            </a>
          </div>

          {/* 4. Mobile Menu Button (Hiện trên di động) */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Mở menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* -------------------- MOBILE MENU (Dropdown) -------------------- */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              <ChevronDownIcon className="h-5 w-5 mr-1 text-gray-500" />
              Hồ Chí Minh
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Tonicar Ký gửi xe
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <a
                href="#"
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Đăng nhập
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
