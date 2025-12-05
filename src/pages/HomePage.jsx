import HeroSection from "../components/common/HeroSection";
function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Phần Hero (Tìm kiếm & Banner) */}
      <HeroSection />

      {/* 2. Các phần nội dung khác của trang chủ (Ví dụ: Xe nổi bật) */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Xe Dành Cho Bạn
        </h2>
        <p className="text-center text-gray-600">
          (Danh sách xe sẽ được thêm vào ở đây sau...)
        </p>
      </div>
    </div>
  );
}
export default HomePage;
