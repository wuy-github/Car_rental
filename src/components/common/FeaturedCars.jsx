import React from "react";
import CarCard from "./CarCard";
import slide1 from "../../assets/slides/slide1.jpg";
import slide2 from "../../assets/slides/slide2.jpg";
import slide3 from "../../assets/slides/slide3.jpg";
import slide4 from "../../assets/slides/slide4.jpg";
import slide5 from "../../assets/slides/slide5.jpg";

// DỮ LIỆU MẪU (Mock Data) - Giống như trong hình bạn gửi
const cars = [
  {
    id: 1,
    name: "Vinfast Lux SA 2.0 2021",
    location: "Quận 3, TP.HCM",
    price: "1,070K",
    originalPrice: "1,270K",
    discount: "Giảm 16%",
    flashSale: false,
    image: slide1,
    seats: 7,
    transmission: "Tự động",
    fuel: "Xăng",
  },
  {
    id: 2,
    name: "Hyundai Accent 2022",
    location: "Quận 10, TP.HCM",
    price: "680K",
    originalPrice: "800K",
    discount: "Giảm 15%",
    flashSale: false,
    image: slide2,
    seats: 5,
    transmission: "Tự động",
    fuel: "Xăng",
  },
  {
    id: 3,
    name: "Hyundai Stargazer 2022",
    location: "Quận 4, TP.HCM",
    price: "560K",
    originalPrice: "700K",
    discount: null,
    flashSale: true,
    image: slide3,
    seats: 7,
    transmission: "Tự động",
    fuel: "Xăng",
  },
  {
    id: 4,
    name: "Kia Carens 2023",
    location: "Bình Thạnh, TP.HCM",
    price: "880K",
    originalPrice: "1,100K",
    discount: null,
    flashSale: true,
    image: slide4,
    seats: 7,
    transmission: "Tự động",
    fuel: "Xăng",
  },
  {
    id: 5,
    name: "Honda CR-V 2021",
    location: "Bình Thạnh, TP.HCM",
    price: "1,190K",
    originalPrice: "1,400K",
    discount: "Giảm 15%",
    flashSale: false,
    image: slide5,
    seats: 5,
    transmission: "Tự động",
    fuel: "Xăng",
  },
  {
    id: 6,
    name: "Mazda CX5 2020",
    location: "Quận 7, TP.HCM",
    price: "950K",
    originalPrice: "1,100K",
    discount: "Giảm 10%",
    flashSale: false,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    seats: 5,
    transmission: "Tự động",
    fuel: "Xăng",
  },
];

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
