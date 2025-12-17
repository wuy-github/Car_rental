import React from "react";
import avatar1 from "../../assets/images/carlogin.jpg";
import avatar2 from "../../assets/images/carlogin.jpg";
import avatar3 from "../../assets/images/carlogin.jpg";

const reviews = [
  {
    name: "Anh Hòa",
    text: "Dịch vụ tốt, xe sạch, hỗ trợ nhiệt tình.",
    avatar: avatar1,
  },
  { name: "Anh Hải", text: "Đặt xe nhanh, thủ tục gọn.", avatar: avatar2 },
  {
    name: "Anh Nguyên",
    text: "Giá hợp lý, thời gian linh động.",
    avatar: avatar3,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-[#f0fdf9]">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Đánh giá khách hàng
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-gray-500">Cư dân</div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
