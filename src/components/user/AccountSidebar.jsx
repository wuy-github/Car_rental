import React from "react";
import { NavLink } from "react-router-dom";

export default function AccountSidebar() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4">Tài khoản của tôi</h3>
      <nav className="flex flex-col gap-2 text-sm">
        <NavLink to="#profile" className="px-3 py-2 rounded hover:bg-gray-50">
          Hồ sơ
        </NavLink>
        <NavLink to="#rentals" className="px-3 py-2 rounded hover:bg-gray-50">
          Lịch sử đặt xe
        </NavLink>
        <NavLink to="#saved" className="px-3 py-2 rounded hover:bg-gray-50">
          Xe đã lưu
        </NavLink>
        <NavLink to="#payments" className="px-3 py-2 rounded hover:bg-gray-50">
          Phương thức thanh toán
        </NavLink>
        <button className="mt-4 px-3 py-2 bg-red-50 text-red-600 rounded">
          Đăng xuất
        </button>
      </nav>
    </div>
  );
}
