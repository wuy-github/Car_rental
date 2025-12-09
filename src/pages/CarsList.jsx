import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CarCard from "../components/common/CarCard";
import { cars as allCars } from "../data/cars";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CarsList() {
  const query = useQuery();
  const navigate = useNavigate();

  const qLocation = query.get("location") || "";
  const qPickupDate = query.get("pickupDate") || "";

  const [searchText, setSearchText] = useState(qLocation);

  const filtered = useMemo(() => {
    const txt = (qLocation || "").toLowerCase();
    if (!txt) return allCars;
    return allCars.filter(
      (c) =>
        c.location.toLowerCase().includes(txt) ||
        c.name.toLowerCase().includes(txt)
    );
  }, [qLocation]);

  const onSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchText) params.set("location", searchText);
    if (qPickupDate) params.set("pickupDate", qPickupDate);
    navigate(`/cars?${params.toString()}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Kết quả tìm kiếm
            </h1>
            <p className="text-sm text-gray-500">
              {filtered.length} xe phù hợp
            </p>
          </div>

          <form onSubmit={onSearch} className="flex items-center gap-2">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Tìm theo tên hoặc địa điểm"
              className="p-2 rounded border border-gray-200"
            />
            <button className="px-4 py-2 bg-[#54c6a8] text-white rounded">
              Tìm
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}
