import HeroSection from "../components/common/HeroSection";
import FeaturedCars from "../components/common/FeaturedCars";
function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <FeaturedCars />
    </div>
  );
}
export default HomePage;
