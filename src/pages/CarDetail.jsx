import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import slide1 from "../assets/slides/slide1.jpg";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";
import slide4 from "../assets/slides/slide4.jpg";
import slide5 from "../assets/slides/slide5.jpg";

const IMAGES = [slide1, slide2, slide3, slide4, slide5];

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [main, setMain] = useState(IMAGES[0]);

  const car = {
    title: "VINFAST VF7 2024",
    id,
    location: "Quận 10",
    seats: 5,
    transmission: "Số tự động",
    fuel: "Điện",
    consumption: "130kw / 100km",
    description:
      "CHO THUÊ VINFAST VF7 ECO 2024 – XE ĐIỆN MÀU XANH, MỚI NGUYÊN CHIẾC. Bạn cần một chiếc SUV điện 5 chỗ vừa hiện đại, vừa thân thiện môi trường? VF7 Eco màu xanh là lựa chọn lý tưởng cho nhu cầu đi lại, du lịch ngắn - dài hạn.",
    address: "Số 299, Đường Cách Mạng Tháng 8, Phường 12, Quận 10, TP.HCM",
    price: "670K",
    priceLabel: "/4 giờ",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation: back + breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg px-4 py-3 flex items-center justify-between gap-4 transform-gpu transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-sm text-sm font-medium text-gray-700 hover:shadow-md transform transition hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Quay lại
            </button>

            <nav className="text-sm text-gray-600">
              <ol className="flex items-center gap-2">
                <li>
                  <a href="/" className="hover:text-gray-900">
                    Trang chủ
                  </a>
                </li>
                <li className="text-gray-300">/</li>
                <li>
                  <a href="/cars" className="hover:text-gray-900">
                    Xe thuê
                  </a>
                </li>
                <li className="text-gray-300">/</li>
                <li className="text-gray-800 font-medium">{car.title}</li>
              </ol>
            </nav>
          </div>

          <div className="text-sm text-gray-600">
            ID: <span className="font-medium text-gray-800">{car.id}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Gallery + Details (col-span 2 on large) */}
          <section className="lg:col-span-2 space-y-6">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 items-start">
                <div className="lg:col-span-3">
                  <div className="rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={main}
                      alt="car"
                      className="w-full h-[460px] object-cover rounded-md"
                    />
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    {IMAGES.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setMain(src)}
                        className={`overflow-hidden rounded-md border transition-transform transform hover:scale-105 focus:outline-none ${
                          main === src
                            ? "ring-2 ring-indigo-400 border-indigo-200"
                            : "border-gray-100"
                        }`}
                        aria-label={`Chọn ảnh ${i + 1}`}
                      >
                        <img
                          src={src}
                          alt={`thumb-${i}`}
                          className="w-28 h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h1 className="text-2xl font-extrabold text-gray-900">
                          {car.title}
                        </h1>
                        <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs">
                            ID: {car.id}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[#16a34a] font-medium">
                            {car.location}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">
                          {car.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          {car.priceLabel}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 border-t pt-4">
                      <h4 className="text-lg font-semibold mb-3">Đặc điểm</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400">Số ghế</span>
                          <strong className="mt-1 text-base">
                            {car.seats} chỗ
                          </strong>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400">
                            Truyền động
                          </span>
                          <strong className="mt-1 text-base">
                            {car.transmission}
                          </strong>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400">
                            Nhiên liệu
                          </span>
                          <strong className="mt-1 text-base">{car.fuel}</strong>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400">
                            Tiêu hao
                          </span>
                          <strong className="mt-1 text-base">
                            {car.consumption}
                          </strong>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-2">Mô tả</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {car.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Vị trí xe</h4>
                      <p className="text-gray-700 mb-3">{car.address}</p>

                      <div className="rounded overflow-hidden border">
                        <iframe
                          title="map"
                          src={`https://www.google.com/maps?q=${encodeURIComponent(
                            car.address
                          )}&output=embed`}
                          className="w-full h-56 border-0"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">
                        Các tiện nghi khác
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-600">
                        <div>Bluetooth</div>
                        <div>Camera hành trình</div>
                        <div>Định vị GPS</div>
                        <div>Màn hình DVD</div>
                        <div>Lốp dự phòng</div>
                        <div>Số túi khí</div>
                        <div>Cảm biến lùi</div>
                        <div>ETC</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Điều khoản</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Sử dụng xe đúng mục đích.</li>
                        <li>Không hút thuốc trong xe.</li>
                        <li>Không chở hàng nguy hiểm.</li>
                        <li>Đặt cọc khi nhận xe.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Right: Booking sidebar */}
          <aside className="space-y-6">
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-lg shadow p-5 transform-gpu transition hover:shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Tự nhận xe</div>
                    <div className="text-xs text-gray-400">
                      Nhanh, tiện lợi và tiết kiệm
                    </div>
                  </div>
                  <div>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Có sẵn
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-4 border rounded bg-gray-50">
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm text-gray-500">Giá</div>
                    <div className="text-sm text-gray-500">
                      {car.priceLabel}
                    </div>
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {car.price}
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Giảm 10%
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs text-gray-500 mb-1">
                    Bắt đầu
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="mt-3">
                  <label className="block text-xs text-gray-500 mb-1">
                    Kết thúc
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="mt-4">
                  <button className="w-full bg-[#0f766e] hover:bg-[#0b6b61] text-white py-3 rounded font-semibold">
                    Thuê xe ngay
                  </button>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Tổng tạm tính</span>
                    <strong>3.193.155₫</strong>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Bao gồm VAT và phí
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg shadow p-4 text-sm text-gray-700">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Phụ phí có thể phát sinh
                </h4>
                <ul className="space-y-2">
                  <li>Phí trễ: 260.000 đ/giờ</li>
                  <li>Tiền điện xe EV: 1.000 đ/km</li>
                  <li>Phí vượt định mức km: 3.000 đ/km</li>
                  <li>Phí vệ sinh: 150.000 đ</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
