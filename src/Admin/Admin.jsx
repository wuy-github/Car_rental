import React, { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  Package,
  CheckCircle,
  AlertCircle,
  Search,
  Users,
  ShoppingBag,
  MoreVertical,
} from "lucide-react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import UsersView from "./UsersView";
import ProductsView from "./ProductsView";
import SettingsView from "./SettingsView";

// --- MOCK DATA (Dữ liệu giả lập) ---

const STATS_DATA = [
  {
    title: "Tổng Doanh Thu",
    value: "120.500.000 ₫",
    change: "+12%",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Người Dùng Mới",
    value: "1,234",
    change: "+5%",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Đơn Hàng",
    value: "567",
    change: "+18%",
    icon: ShoppingBag,
    color: "bg-purple-500",
  },
  {
    title: "Sản Phẩm",
    value: "89",
    change: "+2%",
    icon: Package,
    color: "bg-orange-500",
  },
];

const RECENT_USERS = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    email: "an.nguyen@example.com",
    role: "Admin",
    status: "Active",
    date: "2023-10-01",
  },
  {
    id: 2,
    name: "Trần Thị Bích",
    email: "bich.tran@example.com",
    role: "User",
    status: "Inactive",
    date: "2023-10-02",
  },
  {
    id: 3,
    name: "Lê Hoàng Cường",
    email: "cuong.le@example.com",
    role: "Editor",
    status: "Active",
    date: "2023-10-03",
  },
  {
    id: 4,
    name: "Phạm Minh Dũng",
    email: "dung.pham@example.com",
    role: "User",
    status: "Active",
    date: "2023-10-04",
  },
  {
    id: 5,
    name: "Vũ Thị Em",
    email: "em.vu@example.com",
    role: "User",
    status: "Warning",
    date: "2023-10-05",
  },
];

const PRODUCTS_DATA = [
  {
    id: 1,
    model: "Toyota Camry",
    make: "Toyota",
    year: 2020,
    plate: "30A-123.45",
    pricePerDay: "800.000 ₫",
    seats: 5,
    status: "Sẵn sàng",
  },
  {
    id: 2,
    model: "Honda CR-V",
    make: "Honda",
    year: 2019,
    plate: "29B-987.65",
    pricePerDay: "850.000 ₫",
    seats: 5,
    status: "Đang thuê",
  },
  {
    id: 3,
    model: "Ford Transit",
    make: "Ford",
    year: 2018,
    plate: "30C-555.66",
    pricePerDay: "1.200.000 ₫",
    seats: 12,
    status: "Bảo trì",
  },
  {
    id: 4,
    model: "Kia Morning",
    make: "Kia",
    year: 2021,
    plate: "31A-444.11",
    pricePerDay: "400.000 ₫",
    seats: 4,
    status: "Sẵn sàng",
  },
];
const DashboardView = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {STATS_DATA.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">
                {stat.value}
              </h3>
            </div>
            <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
              <stat.icon
                size={24}
                className={stat.color.replace("bg-", "text-")}
              />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 flex items-center font-medium">
              <TrendingUp size={16} className="mr-1" /> {stat.change}
            </span>
            <span className="text-gray-400 ml-2">so với tháng trước</span>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">Hoạt động gần đây</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-6 py-4 font-semibold">Người dùng</th>
              <th className="px-6 py-4 font-semibold">Trạng thái</th>
              <th className="px-6 py-4 font-semibold">Ngày</th>
              <th className="px-6 py-4 font-semibold text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {RECENT_USERS.slice(0, 3).map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-gray-500 text-xs">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Inactive"
                        ? "bg-gray-100 text-gray-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">{user.date}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-indigo-600">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// ProductsView and SettingsView have been extracted to separate files

// --- MAIN ADMIN COMPONENT ---

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [users, setUsers] = useState(RECENT_USERS);
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    phone: "0987 654 321",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
  });

  const handleSaveSettings = (data) => {
    setProfile((prev) => ({ ...prev, ...data }));
  };

  const handleAddUser = (data) => {
    setUsers((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
      return [
        { id: nextId, date: new Date().toISOString().slice(0, 10), ...data },
        ...prev,
      ];
    });
  };

  const handleEditUser = (updated) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updated.id ? { ...u, ...updated } : u))
    );
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleAddProduct = (data) => {
    setProducts((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
      return [{ id: nextId, ...data }, ...prev];
    });
  };

  const handleEditProduct = (updated) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))
    );
  };

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView />;
      case "users":
        return (
          <UsersView
            users={users}
            onAdd={handleAddUser}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        );
      case "products":
        return (
          <ProductsView
            products={products}
            onAdd={handleAddProduct}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        );
      case "settings":
        return <SettingsView profile={profile} onSave={handleSaveSettings} />;
      default:
        return <DashboardView />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Tổng Quan Hệ Thống";
      case "users":
        return "Quản Lý Người Dùng";
      case "products":
        return "Danh Sách Sản Phẩm";
      case "settings":
        return "Cài Đặt";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        <Header
          title={getTitle()}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          profile={profile}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
