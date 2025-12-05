import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  TrendingUp,
  DollarSign,
  Package,
  MoreVertical,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

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
    name: "Laptop Gaming X5",
    category: "Điện tử",
    price: "25.000.000 ₫",
    stock: 12,
    status: "Còn hàng",
  },
  {
    id: 2,
    name: "Tai nghe Bluetooth Pro",
    category: "Phụ kiện",
    price: "1.200.000 ₫",
    stock: 45,
    status: "Còn hàng",
  },
  {
    id: 3,
    name: "Chuột không dây M1",
    category: "Phụ kiện",
    price: "350.000 ₫",
    stock: 0,
    status: "Hết hàng",
  },
  {
    id: 4,
    name: "Màn hình 4K Ultra",
    category: "Điện tử",
    price: "8.500.000 ₫",
    stock: 5,
    status: "Sắp hết",
  },
];

// --- COMPONENTS CON ---

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

const Header = ({ title, toggleSidebar }) => (
  <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
    <div className="flex items-center gap-4">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <Menu size={24} />
      </button>
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    </div>

    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
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
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 pr-2 rounded-full border border-gray-100">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
          alt="Avatar"
          className="w-8 h-8 rounded-full bg-indigo-100"
        />
        <span className="text-sm font-medium text-gray-700 hidden sm:block">
          Admin User
        </span>
      </div>
    </div>
  </header>
);

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

const UsersView = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
    <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
      <div className="flex gap-2">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
          Thêm mới
        </button>
      </div>
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <input
          type="text"
          placeholder="Tìm người dùng..."
          className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64"
        />
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
          <tr>
            <th className="px-6 py-4 font-semibold">ID</th>
            <th className="px-6 py-4 font-semibold">Thông tin</th>
            <th className="px-6 py-4 font-semibold">Vai trò</th>
            <th className="px-6 py-4 font-semibold">Trạng thái</th>
            <th className="px-6 py-4 font-semibold text-right">Thao tác</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm">
          {RECENT_USERS.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-gray-500">#{user.id}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-gray-500 text-xs">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-600">{user.role}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : user.status === "Inactive"
                      ? "bg-gray-100 text-gray-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      user.status === "Active"
                        ? "bg-green-500"
                        : user.status === "Inactive"
                        ? "bg-gray-500"
                        : "bg-yellow-500"
                    }`}
                  ></span>
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right space-x-2">
                <button className="text-indigo-600 hover:text-indigo-900 font-medium">
                  Sửa
                </button>
                <button className="text-red-600 hover:text-red-900 font-medium">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProductsView = () => (
  <div className="grid grid-cols-1 gap-6 animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-indigo-500 text-white p-6 rounded-xl shadow-md">
        <h4 className="text-indigo-100 text-sm font-medium">Tổng sản phẩm</h4>
        <p className="text-3xl font-bold mt-2">1,423</p>
      </div>
      <div className="bg-emerald-500 text-white p-6 rounded-xl shadow-md">
        <h4 className="text-emerald-100 text-sm font-medium">Hàng trong kho</h4>
        <p className="text-3xl font-bold mt-2">1,380</p>
      </div>
      <div className="bg-rose-500 text-white p-6 rounded-xl shadow-md">
        <h4 className="text-rose-100 text-sm font-medium">Hết hàng</h4>
        <p className="text-3xl font-bold mt-2">43</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-800">Kho hàng</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-6 py-4">Tên sản phẩm</th>
              <th className="px-6 py-4">Danh mục</th>
              <th className="px-6 py-4">Giá</th>
              <th className="px-6 py-4">Tồn kho</th>
              <th className="px-6 py-4">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {PRODUCTS_DATA.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-gray-500">{product.category}</td>
                <td className="px-6 py-4 font-medium">{product.price}</td>
                <td className="px-6 py-4 text-gray-500">{product.stock}</td>
                <td className="px-6 py-4">
                  <span
                    className={`flex items-center gap-1 text-xs font-semibold ${
                      product.stock === 0
                        ? "text-red-600"
                        : product.stock < 10
                        ? "text-orange-600"
                        : "text-green-600"
                    }`}
                  >
                    {product.stock === 0 ? (
                      <AlertCircle size={14} />
                    ) : (
                      <CheckCircle size={14} />
                    )}
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const SettingsView = () => (
  <div className="max-w-4xl bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 animate-fade-in">
    <h3 className="text-xl font-bold text-gray-800 mb-6">Cài đặt tài khoản</h3>

    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
              alt="Profile"
              className="w-full h-full"
            />
          </div>
          <button className="text-sm text-indigo-600 font-medium hover:underline">
            Đổi ảnh
          </button>
        </div>

        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Họ và tên
            </label>
            <input
              type="text"
              defaultValue="Admin User"
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              defaultValue="admin@example.com"
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <input
              type="tel"
              defaultValue="0987 654 321"
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>
        </div>
      </div>
      <div className="pt-4 flex justify-end gap-3">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
          Hủy
        </button>
        <button className="px-4 py-2 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-500/30">
          Lưu thay đổi
        </button>
      </div>
    </div>
  </div>
);

// --- MAIN ADMIN COMPONENT ---

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView />;
      case "users":
        return <UsersView />;
      case "products":
        return <ProductsView />;
      case "settings":
        return <SettingsView />;
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
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
