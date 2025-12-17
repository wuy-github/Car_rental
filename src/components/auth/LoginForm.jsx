import React, { useState } from "react";

export default function LoginForm({ onForgot, onSwitchToOtp, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email hoặc SĐT
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#54c6a8]/40 focus:border-transparent outline-none transition-all"
          placeholder="name@company.com hoặc 0901234567"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mật khẩu
        </label>
        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#54c6a8]/40 focus:border-transparent outline-none transition-all"
            placeholder="Nhập mật khẩu"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            {showPassword ? "Ẩn" : "Hiện"}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onForgot}
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Quên mật khẩu?
        </button>
        <button
          type="button"
          onClick={() => {
            if (onSwitchToOtp) onSwitchToOtp();
          }}
          className="text-sm font-medium text-green-600 hover:text-green-500"
        >
          Đăng nhập bằng OTP
        </button>
      </div>

      <div>
        <button
          onClick={() => onLogin && onLogin(email, password)}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-[#54c6a8] hover:bg-[#3fb094] transform transition hover:-translate-y-0.5"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
