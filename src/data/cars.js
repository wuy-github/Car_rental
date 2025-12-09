import slide1 from "../assets/slides/slide1.jpg";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";
import slide4 from "../assets/slides/slide4.jpg";
import slide5 from "../assets/slides/slide5.jpg";

export const cars = [
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

export default cars;
