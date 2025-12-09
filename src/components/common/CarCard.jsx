import React from "react";
import { Link } from "react-router-dom";
import {
  FaGasPump,
  FaCogs,
  FaUser,
  FaBolt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-[#54c6a8] transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      {/* --- PHẦN HÌNH ẢNH --- */}
      <div className="relative h-48 overflow-hidden group">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Tag giảm giá (Góc trái trên) */}
        {car.discount && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-red-500 border border-red-100 shadow-sm">
            {car.discount}
          </div>
        )}

        {/* Tag Flash Sale (Nếu có) */}
        {car.flashSale && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center shadow-sm">
            <FaBolt className="mr-1" /> Flash Sale
          </div>
        )}

        {/* Badge Tự nhận xe (Góc phải dưới) */}
        <div className="absolute bottom-3 right-3 bg-[#54c6a8] text-white px-2 py-1 rounded text-xs font-bold flex items-center shadow-sm">
          <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
          Tự nhận xe
        </div>
      </div>

      {/* --- PHẦN NỘI DUNG --- */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Tên xe & Năm */}
        <h3 className="text-lg font-bold text-gray-800 mb-1 truncate uppercase">
          {car.name}
        </h3>

        {/* Địa điểm */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <FaMapMarkerAlt className="mr-1 text-gray-400" />
          {car.location}
        </div>

        <div className="border-t border-gray-100 my-2"></div>

        {/* Thông số kỹ thuật (Grid 3 cột) */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-600">
          <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
            <FaUser className="mb-1 text-gray-400 text-sm" />
            <span>{car.seats} chỗ</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
            <FaCogs className="mb-1 text-gray-400 text-sm" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
            <FaGasPump className="mb-1 text-gray-400 text-sm" />
            <span>{car.fuel}</span>
          </div>
        </div>

        {/* Giá tiền (Đẩy xuống cuối cùng) */}
        <div className="mt-auto pt-2">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-gray-400 line-through">
                {car.originalPrice}
              </p>
              <p className="text-green-600 font-medium text-lg">
                {car.price}
                <span className="text-xs text-gray-500 font-normal">/ngày</span>
              </p>
            </div>
            <Link
              to={`/cars/${car.id}`}
              className="bg-[#54c6a8] hover:bg-[#3fb094] text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm inline-flex items-center justify-center"
            >
              Chọn xe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
