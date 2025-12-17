import React from "react";

export default function SavedCars({ cars = [], onRemove }) {
  if (!cars.length)
    return (
      <div className="p-4 text-sm text-gray-500">Bạn chưa lưu xe nào.</div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cars.map((c) => (
        <div
          key={c.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden flex transform transition hover:-translate-y-0.5 hover:shadow-lg border border-gray-100"
        >
          <img src={c.image} alt={c.name} className="w-28 h-20 object-cover" />
          <div className="p-3 flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{c.name}</h4>
              <div className="text-sm text-gray-500">{c.price}</div>
            </div>
            <div className="mt-2 text-sm text-gray-600">{c.location}</div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1 bg-[#54c6a8] text-white rounded text-sm">
                Đặt lại
              </button>
              <button
                onClick={() => onRemove?.(c.id)}
                className="px-3 py-1 bg-red-50 text-red-600 rounded text-sm"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
