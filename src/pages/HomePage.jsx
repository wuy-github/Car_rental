import HeroSection from "../components/common/HeroSection";
import FeaturedCars from "../components/common/FeaturedCars";
import BookingSteps from "../components/common/BookingSteps";
import Testimonials from "../components/common/Testimonials";
function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <FeaturedCars />
      <BookingSteps />
      <Testimonials />
    </div>
  );
}
export default HomePage;
