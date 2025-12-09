import React from "react";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Settings,
  X,
  LogOut,
} from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: "dashboard", label: "Tổng quan", icon: LayoutDashboard },
    { id: "users", label: "Người dùng", icon: Users },
    { id: "products", label: "Sản phẩm", icon: ShoppingBag },
    { id: "settings", label: "Cài đặt", icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`
        fixed top-0 left-0 z-30 h-screen w-64 bg-slate-900 text-white transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block
      `}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              A
            </div>
            <span>AdminPro</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-700">
          <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 w-full rounded-lg transition-colors">
            <LogOut size={20} />
            <span>Đăng xuất</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
