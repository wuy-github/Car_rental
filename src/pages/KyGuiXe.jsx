import React from "react";
import { Link } from "react-router-dom";
import ConsignHero from "../components/common/ConsignHero";

function KyGuiXe() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <nav className="flex items-center gap-4" aria-label="Breadcrumb">
            <Link
              to="/"
              className="group flex items-center gap-2 text-sm text-black hover:text-gray-900 transition"
            >
              <span className="text-xl leading-none transform group-hover:-translate-x-1 transition-transform text-[#54c6a8]">
                ←
              </span>
              <span className="relative overflow-hidden">
                <span className="relative">Về trang chủ</span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#54c6a8] group-hover:w-full transition-all" />
              </span>
            </Link>

            <span className="text-sm text-gray-400">/</span>
            <span className="text-sm font-medium text-[#2b2d42]">
              Ký gửi xe
            </span>
          </nav>

          <div className="ml-auto">
            <Link
              to="/"
              className="px-3 py-1 bg-[#54c6a8] text-white rounded-md text-sm hover:bg-[#3fb094] transition-shadow shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Trang chủ
            </Link>
          </div>
        </div>
      </div>

      <ConsignHero />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-8">
            Cho thuê 3 bước siêu dễ chỉ 10 phút
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-[#54c6a8] mb-3">1</div>
              <h4 className="font-semibold mb-2">
                Chuẩn bị xe và nhận đơn nhẹ nhàng
              </h4>
              <p className="text-sm text-black">
                Khi xe sẵn sàng cho thuê, BonbonCar sẽ thay chủ xe đánh giá hồ
                sơ và ký hợp đồng cho thuê khi khách đặt xe.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-[#54c6a8] mb-3">2</div>
              <h4 className="font-semibold mb-2">Cho thuê xe nhanh nhã</h4>
              <p className="text-sm text-black">
                Khách thuê sẽ tự lấy xe và trả xe tại vị trí xe đậu dưới sự giám
                sát 24/7 của BonbonCar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-[#54c6a8] mb-3">3</div>
              <h4 className="font-semibold mb-2">
                Nhận thu nhập hấp dẫn hàng tuần
              </h4>
              <p className="text-sm text-black">
                Nhận tiền thuê và các thu nhập khác hàng tuần.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-center mb-6">
            BonbonCar: Giải pháp vượt trội cho thuê xe tự lái
          </h3>
          <div className="mt-6 border-t">
            <ul className="divide-y">
              <li className="flex justify-between py-4">
                <span>Tiết kiệm 90% thời gian, công sức cho thuê</span>
                <span className="text-green-500">✓</span>
              </li>
              <li className="flex justify-between py-4">
                <span>Quy trình quản lý rủi ro 10 bước chặt chẽ</span>
                <span className="text-green-500">✓</span>
              </li>
              <li className="flex justify-between py-4">
                <span>Miễn phí lắp đặt thiết bị an toàn</span>
                <span className="text-green-500">✓</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KyGuiXe;
