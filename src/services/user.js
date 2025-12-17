import { cars } from "../data/cars";

let mockUser = {
  id: "u_1",
  name: "Nguyễn Văn A",
  email: "nguyenvana@example.com",
  phone: "+84 912 345 678",
  avatar: "",
  // default role for normal users
  role: "user",
};

let mockRentals = [
  {
    id: "r_1",
    carId: 2,
    start: "2025-11-10T09:00",
    end: "2025-11-12T18:00",
    status: "completed",
    total: "1.360.000₫",
  },
  {
    id: "r_2",
    carId: 3,
    start: "2025-12-20T08:00",
    end: "2025-12-22T10:00",
    status: "upcoming",
    total: "1.120.000₫",
  },
];

let mockSaved = [2, 5];

export async function getUserProfile() {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 120));
  return mockUser;
}

export async function getUserRentals() {
  await new Promise((r) => setTimeout(r, 120));
  // join with car data
  return mockRentals.map((r) => ({
    ...r,
    car: cars.find((c) => c.id === r.carId),
  }));
}

export async function getSavedCars() {
  await new Promise((r) => setTimeout(r, 80));
  return mockSaved.map((id) => cars.find((c) => c.id === id));
}

export async function cancelRental(rentalId) {
  await new Promise((r) => setTimeout(r, 120));
  mockRentals = mockRentals.map((r) =>
    r.id === rentalId ? { ...r, status: "cancelled" } : r
  );
  return true;
}

export async function removeSavedCar(carId) {
  await new Promise((r) => setTimeout(r, 80));
  mockSaved = mockSaved.filter((id) => id !== carId);
  return true;
}

export default {
  getUserProfile,
  getUserRentals,
  getSavedCars,
  cancelRental,
  removeSavedCar,
};
