import React, { useState, useMemo } from "react";
import { Search, MoreVertical } from "lucide-react";

const UserForm = ({ initial = {}, onCancel, onSave }) => {
  const [form, setForm] = useState({
    name: initial.name || "",
    email: initial.email || "",
    role: initial.role || "User",
    status: initial.status || "Active",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="p-4">
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium">Họ và tên</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Mật khẩu</label>
          <div className="flex items-center gap-2">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder={
                initial.name
                  ? "Để trống nếu không đổi mật khẩu"
                  : "Nhập mật khẩu"
              }
              className="w-full p-2 border rounded mt-1"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="text-sm text-gray-500 px-2"
            >
              {showPassword ? "Ẩn" : "Hiện"}
            </button>
          </div>
          {initial.name && (
            <div className="text-xs text-gray-500 mt-1">
              Để trống nếu không muốn đổi mật khẩu
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-sm font-medium">Vai trò</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            >
              <option>Admin</option>
              <option>User</option>
              <option>Editor</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Trạng thái</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Warning</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onCancel} className="px-3 py-1 border rounded">
            Hủy
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-3 py-1 bg-indigo-600 text-white rounded"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

const UsersView = ({ users = [], onAdd, onEdit, onDelete }) => {
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const filtered = useMemo(() => {
    if (!query) return users;
    const q = query.toLowerCase();
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    );
  }, [users, query]);

  const openAdd = () => {
    setEditing(null);
    setShowForm(true);
  };

  const openEdit = (user) => {
    setEditing(user);
    setShowForm(true);
  };

  const handleSave = (data) => {
    if (editing) {
      onEdit({ ...editing, ...data });
    } else {
      onAdd(data);
    }
    setShowForm(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="flex gap-2">
          <button
            onClick={openAdd}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
          >
            Thêm mới
          </button>
        </div>
        <div className="relative w-full sm:w-auto">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
            {filtered.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-500">#{user.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
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
                  <button
                    onClick={() => openEdit(user)}
                    className="text-indigo-600 hover:text-indigo-900 font-medium"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => {
                      if (confirm("Xóa người dùng này?")) onDelete(user.id);
                    }}
                    className="text-red-600 hover:text-red-900 font-medium"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg w-full max-w-lg shadow-lg">
            <div className="p-4 border-b flex items-center justify-between">
              <h4 className="font-medium">
                {editing ? "Sửa người dùng" : "Thêm người dùng"}
              </h4>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>
            <UserForm
              initial={editing || {}}
              onCancel={() => setShowForm(false)}
              onSave={handleSave}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersView;
