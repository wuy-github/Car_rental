import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaCar,
  FaTag,
  FaTachometerAlt,
  FaCity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";

function ConsignForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    brand: "",
    model: "",
    year: "2025",
    odo: "",
    city: "Hồ Chí Minh",
    district: "",
    daysAvailable: "Chủ yếu cho thuê",
    referral: "",
  });
  const [errors, setErrors] = useState({});
  const years = Array.from({ length: 20 }).map((_, i) => String(2025 - i));
  const odoOptions = ["< 10k", "10k - 50k", "50k - 100k", "> 100k"];

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Họ và tên là bắt buộc";
    if (!form.phone.trim()) e.phone = "Số điện thoại là bắt buộc";
    if (!form.brand.trim()) e.brand = "Hãng xe là bắt buộc";
    if (!form.model.trim()) e.model = "Mẫu xe là bắt buộc";
    if (!form.odo.trim()) e.odo = "Chọn ODO";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length === 0) {
      // TODO: call API to submit
      console.log("Gửi form ký gửi:", form);
      alert("Gửi thành công (demo). Chúng tôi sẽ liên hệ bạn sớm.");
      setForm({
        fullName: "",
        phone: "",
        brand: "",
        model: "",
        year: "2025",
        odo: "",
        city: "Hồ Chí Minh",
        district: "",
        daysAvailable: "Chủ yếu cho thuê",
        referral: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <span className="inline-flex items-center text-sm bg-[#e6fff8] text-[#0a9f86] px-3 py-1 rounded-full font-medium mb-3">
          <FaCar className="mr-2" /> Ký gửi xe
        </span>
        <h3 className="text-2xl font-semibold text-black">
          Đăng ký cho thuê xe
        </h3>
        <p className="text-sm text-black mt-1">
          Chúng tôi sẽ liên hệ trong vòng 48 giờ để hoàn tất thủ tục.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-800 mb-1 gap-2">
            <FaUser className="text-[#54c6a8]" /> Họ tên *
          </label>
          <input
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
            placeholder="Nhập họ tên"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-black mb-1 gap-2">
            <FaPhone className="text-[#54c6a8]" /> Số điện thoại *
          </label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
            placeholder="Nhập số điện thoại"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-black mb-1 gap-2">
            <FaCar className="text-[#54c6a8]" /> Hãng xe *
          </label>
          <input
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
            placeholder="Hãng xe"
          />
          {errors.brand && (
            <p className="text-red-500 text-sm mt-1">{errors.brand}</p>
          )}
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-black mb-1 gap-2">
            <FaTag className="text-[#54c6a8]" /> Mẫu xe *
          </label>
          <input
            value={form.model}
            onChange={(e) => setForm({ ...form, model: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
            placeholder="Mẫu xe"
          />
          {errors.model && (
            <p className="text-red-500 text-sm mt-1">{errors.model}</p>
          )}
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-black mb-1 gap-2">
            <FaCalendarAlt className="text-[#54c6a8]" /> Năm sản xuất
          </label>
          <select
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-black mb-1 gap-2">
            <FaTachometerAlt className="text-[#54c6a8]" /> ODO (số km đã đi) *
          </label>
          <select
            value={form.odo}
            onChange={(e) => setForm({ ...form, odo: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
          >
            <option value="">Chọn ODO</option>
            {odoOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {errors.odo && (
            <p className="text-red-500 text-sm mt-1">{errors.odo}</p>
          )}
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-black mb-1 gap-2">
            <FaCity className="text-[#54c6a8]" /> Thành phố
          </label>
          <input
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-black mb-1 gap-2">
            <FaMapMarkerAlt className="text-[#54c6a8]" /> Quận/Huyện
          </label>
          <input
            value={form.district}
            onChange={(e) => setForm({ ...form, district: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
            placeholder="Nhập quận/huyện"
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-center text-sm font-medium text-black mb-1 gap-2">
            <FaCalendarAlt className="text-[#54c6a8]" /> Số ngày có thể cho thuê
            trong tháng
          </label>
          <select
            value={form.daysAvailable}
            onChange={(e) =>
              setForm({ ...form, daysAvailable: e.target.value })
            }
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
          >
            <option>Chủ yếu cho thuê</option>
            <option>Chỉ cho thuê ngắn hạn</option>
            <option>Không thường xuyên</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="flex items-center text-sm font-medium text-black mb-1 gap-2">
            <FaPhone className="text-[#54c6a8]" /> Thông tin người giới thiệu
            (tùy chọn)
          </label>
          <input
            value={form.referral}
            onChange={(e) => setForm({ ...form, referral: e.target.value })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-black"
            placeholder="Nhập số điện thoại người giới thiệu"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-linear-to-r from-[#2bb89c] to-[#54c6a8] text-white rounded-lg font-semibold hover:opacity-95 flex items-center gap-2 shadow-sm"
        >
          <FaPaperPlane /> Đăng ký ngay
        </button>
      </div>
    </form>
  );
}

export default ConsignForm;
