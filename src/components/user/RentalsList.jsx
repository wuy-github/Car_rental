import React from "react";

export default function RentalsList({ rentals = [], onCancel }) {
  if (!rentals.length) {
    return (
      <div className="p-4 text-sm text-gray-500">Chưa có lịch sử đặt xe.</div>
    );
  }

  return (
    <div className="space-y-4">
      {rentals.map((r) => (
        <div
          key={r.id}
          className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 transform transition hover:-translate-y-0.5 hover:shadow-lg border border-gray-100"
        >
          <img
            src={r.car?.image}
            alt={r.car?.name}
            className="w-28 h-16 object-cover rounded"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{r.car?.name}</h4>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  r.status === "upcoming"
                    ? "bg-yellow-100 text-yellow-700"
                    : r.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {r.status}
              </span>
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {r.start} → {r.end}
            </div>
            <div className="text-sm text-gray-700 mt-2">
              Tạm tính: {r.total}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="px-3 py-2 bg-[#54c6a8] text-white rounded-md text-sm shadow-sm transform transition hover:-translate-y-0.5">
              Chi tiết
            </button>
            {r.status === "upcoming" && (
              <button
                onClick={() => onCancel?.(r.id)}
                className="px-3 py-2 bg-red-50 text-red-600 rounded-md text-sm"
              >
                Hủy
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
