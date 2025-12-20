import React from "react";
import { Search, Menu, Bell } from "lucide-react";

const Header = ({ title, toggleSidebar, profile = {} }) => (
  <header className="bg-white dark:bg-darkbg dark:text-gray-100 border-b border-gray-200 dark:border-transparent px-6 py-4 flex items-center justify-between sticky top-0 z-10">
    <div className="flex items-center gap-4">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <Menu size={24} />
      </button>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {title}
      </h1>
    </div>

    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-transparent rounded-lg px-3 py-2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-transparent border-none outline-none ml-2 text-sm w-48"
        />
      </div>
      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative">
        <Bell size={20} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-transparent p-1 pr-2 rounded-full border border-gray-100 dark:border-transparent">
        <img
          src={
            profile.avatar ||
            "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
          }
          alt="Avatar"
          className="w-8 h-8 rounded-full bg-indigo-100 object-cover"
        />
        <span className="text-sm font-semibold text-gray-700 hidden sm:block">
          {profile.name || "Admin User"}
        </span>
      </div>
    </div>
  </header>
);

export default Header;
