import React, { useState, useEffect } from "react";
import slide1 from "../../assets/slides/slide1.jpg";
import slide2 from "../../assets/slides/slide2.jpg";
import slide3 from "../../assets/slides/slide3.jpg";
import slide4 from "../../assets/slides/slide4.jpg";
import slide5 from "../../assets/slides/slide5.jpg";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const heroImg = [slide1, slide2, slide3, slide4, slide5];
function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Dọn dẹp bộ nhớ
  }, []);
  return (
    <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
      {/* 1. HÌNH NỀN (Background Image) */}
      {heroImg.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-60" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* 2. NỘI DUNG CHÍNH */}
      <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex  flex-col justify-center">
        {/* THANH TÌM KIẾM (Search Box) */}
        <div className="bg-white rounded-lg shadow-xl p-6 mt-[-250px] ">
          <div className="flex flex-col md:flex-row gap-4 items-end ">
            {/* Cột 1: Địa điểm */}
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#54c6a8]" /> Địa điểm nhận xe
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập địa điểm, quận, huyện..."
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#54c6a8] focus:ring-1 focus:ring-blue-500 transition-colors font-medium text-gray-900"
                />
              </div>
            </div>

            {/* Cột 2: Ngày & Giờ Nhận */}
            <div className="w-full md:w-1/4">
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-[#54c6a8]" /> Ngày nhận xe
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 font-medium text-gray-700"
                />
                <input
                  type="time"
                  defaultValue="10:00"
                  className="w-1/2 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 font-medium text-gray-700"
                />
              </div>
            </div>

            {/* Cột 3: Ngày & Giờ Trả */}
            <div className="w-full md:w-1/4">
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-[#54c6a8]" /> Ngày trả xe
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 font-medium text-gray-700"
                />
                <input
                  type="time"
                  defaultValue="14:00"
                  className="w-1/2 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 font-medium text-gray-700"
                />
              </div>
            </div>

            {/* Cột 4: Nút Tìm Xe */}
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto h-[50px] px-8 bg-[#54c6a8] hover:bg-[#3fb094] text-white font-bold rounded-lg transition-all shadow-md flex items-center justify-center whitespace-nowrap">
                TÌM XE
              </button>
            </div>
          </div>
        </div>

        {/* TIÊU ĐỀ (Slogan) - Nằm dưới thanh tìm kiếm */}
        <div className="mt-2 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Thuê xe tự lái <br />
            <span className="text-[#54c6a8]">dẫn lối tương lai</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light">
            Trải nghiệm dịch vụ thuê xe tự lái uy tín, tiện lợi với hàng trăm
            mẫu xe đời mới.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
