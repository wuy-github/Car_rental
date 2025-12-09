import React from "react";
import CarCard from "./CarCard";
import { cars } from "../../data/cars";

// cars data imported from src/data/cars.js

function FeaturedCars() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header của Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Xe Dành Cho Bạn
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Khám phá những mẫu xe đang hot nhất tại BonbonCar với mức giá ưu đãi
            hấp dẫn.
          </p>
        </div>

        {/* Grid hiển thị xe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Nút Xem thêm */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-[#54c6a8] bg-white border-[#54c6a8] hover:bg-[#54c6a8] hover:text-white transition-all shadow-sm">
            Xem tất cả xe
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCars;
