import React, { useState, useEffect } from "react";

const SettingsView = ({ profile = {}, onSave }) => {
  const [form, setForm] = useState({
    name: profile.name || "",
    email: profile.email || "",
    phone: profile.phone || "",
    avatar: profile.avatar || "",
  });
  const [avatarPreview, setAvatarPreview] = useState(profile.avatar || "");
  const [passwords, setPasswords] = useState({
    old: "",
    next: "",
    confirm: "",
  });
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    setForm({
      name: profile.name || "",
      email: profile.email || "",
      phone: profile.phone || "",
      avatar: profile.avatar || "",
    });
    setAvatarPreview(profile.avatar || "");
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleAvatar = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setForm((s) => ({ ...s, avatar: reader.result }));
    };
    reader.readAsDataURL(f);
  };

  const handleSave = () => {
    setMsg({ type: "info", text: "Đang lưu..." });
    try {
      onSave({ ...form, avatar: avatarPreview });
      setMsg({ type: "success", text: "Cập nhật thông tin thành công." });
    } catch {
      setMsg({ type: "error", text: "Lưu thất bại." });
    }
  };

  const handlePasswordChange = () => {
    if (!passwords.next) {
      setMsg({ type: "error", text: "Vui lòng nhập mật khẩu mới." });
      return;
    }
    if (passwords.next !== passwords.confirm) {
      setMsg({ type: "error", text: "Mật khẩu mới không khớp." });
      return;
    }
    // Note: this is local-only. Integrate with backend to actually change password.
    setPasswords({ old: "", next: "", confirm: "" });
    setMsg({ type: "success", text: "Mật khẩu đã được cập nhật (local)." });
  };

  return (
    <div className="max-w-4xl bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 animate-fade-in">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Cài đặt tài khoản
      </h3>

      {msg && (
        <div
          className={`mb-4 p-3 rounded text-sm ${
            msg.type === "success"
              ? "bg-green-50 text-green-700"
              : msg.type === "error"
              ? "bg-red-50 text-red-700"
              : "bg-gray-50 text-gray-700"
          }`}
        >
          {msg.text}
        </div>
      )}

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  No
                </div>
              )}
            </div>
            <label className="text-sm text-indigo-600 font-medium cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatar}
                className="hidden"
              />
              Đổi ảnh
            </label>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-between items-start gap-3 flex-col sm:flex-row">
          <div className="w-full sm:w-auto">
            <button
              onClick={() => {
                setForm({
                  name: profile.name || "",
                  email: profile.email || "",
                  phone: profile.phone || "",
                  avatar: profile.avatar || "",
                });
                setAvatarPreview(profile.avatar || "");
                setMsg(null);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mr-2"
            >
              Hủy
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
            >
              Lưu thay đổi
            </button>
          </div>

          <div className="w-full sm:w-1/2 bg-gray-50 p-4 rounded">
            <h4 className="font-medium mb-2">Đổi mật khẩu</h4>
            <div className="space-y-2">
              <input
                type="password"
                placeholder="Mật khẩu hiện tại"
                value={passwords.old}
                onChange={(e) =>
                  setPasswords((p) => ({ ...p, old: e.target.value }))
                }
                className="w-full p-2 border border-gray-200 rounded"
              />
              <input
                type="password"
                placeholder="Mật khẩu mới"
                value={passwords.next}
                onChange={(e) =>
                  setPasswords((p) => ({ ...p, next: e.target.value }))
                }
                className="w-full p-2 border border-gray-200 rounded"
              />
              <input
                type="password"
                placeholder="Xác nhận mật khẩu mới"
                value={passwords.confirm}
                onChange={(e) =>
                  setPasswords((p) => ({ ...p, confirm: e.target.value }))
                }
                className="w-full p-2 border border-gray-200 rounded"
              />
              <div className="flex justify-end">
                <button
                  onClick={handlePasswordChange}
                  className="px-3 py-1 bg-rose-500 text-white rounded"
                >
                  Đổi mật khẩu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
