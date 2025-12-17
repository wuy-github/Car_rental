import React from "react";
import slide1 from "../../assets/slides/slide1.jpg";
import slide2 from "../../assets/slides/slide2.jpg";
import slide3 from "../../assets/slides/slide3.jpg";

export default function BookingSteps() {
  const steps = [
    {
      title: "1. Chọn và giữ chỗ",
      text: "Với hàng trăm xe tại bonboncar.vn",
      img: slide1,
    },
    {
      title: "2. Thủ tục nhanh gọn",
      text: "Thủ tục qua app nhanh gọn",
      img: slide2,
    },
    {
      title: "3. Nhận xe chủ động",
      text: "Chủ động nhận xe mọi lúc mọi nơi",
      img: slide3,
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <div className="bg-black/30 py-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
              3 Bước đặt xe dễ dàng
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="flex justify-center">
                  <div
                    tabIndex={0}
                    className="w-full max-w-xs bg-transparent rounded-xl p-6 transform-gpu transition-all duration-500 will-change-transform hover:-translate-y-3 hover:scale-[1.02] hover:rotate-1 shadow-md hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-4 focus:ring-[#54c6a8]/30"
                    style={{ perspective: 1000 }}
                  >
                    <div className="flex flex-col items-center text-center text-white">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-20 h-20 rounded-full border-4 border-[#54c6a8] object-cover mb-4 transition-transform duration-500 hover:scale-110"
                      />
                      <h4
                        className="font-semibold text-lg"
                        style={{ color: "#54c6a8" }}
                      >
                        {s.title}
                      </h4>
                      <p className="text-sm opacity-90 mt-2 text-white/90">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
