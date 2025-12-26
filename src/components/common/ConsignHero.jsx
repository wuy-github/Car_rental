import React from "react";
import ConsignForm from "./ConsignForm";
import hero from "../../assets/images/carlogin.jpg";
import HeroDecor from "./HeroDecor";
import { FaCar } from "react-icons/fa";

function ConsignHero() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <HeroDecor />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center text-sm bg-[#e6fff8] text-[#0a9f86] px-3 py-1 rounded-full font-medium mb-4">
              <FaCar className="mr-2" /> Ký gửi xe
            </span>
            <h2 className="text-4xl font-bold text-[#2b2d42] mb-4">
              Cho thuê nhẹ nhàng, thu nhập thành thơi cùng{" "}
              <span className="bg-linear-to-r from-[#54c6a8] to-[#2bb89c] bg-clip-text text-transparent">
                BonbonCar ✨
              </span>
            </h2>
            <p className="text-black mb-6">
              Hãy điền đầy đủ thông tin để chúng tôi ước tính thu nhập và liên
              hệ hỗ trợ bạn trong vòng 48 giờ.
            </p>
            <ConsignForm />
          </div>

          <div className="flex justify-center">
            <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg relative">
              <img
                src={hero}
                alt="car"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-linear-to-r from-[#e6fff8] to-[#dff8f2] opacity-90 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsignHero;
