import React, { useEffect, useState } from "react";
import AccountSidebar from "../components/user/AccountSidebar";
import RentalsList from "../components/user/RentalsList";
import SavedCars from "../components/user/SavedCars";
import {
  getUserProfile,
  getUserRentals,
  getSavedCars,
  cancelRental,
  removeSavedCar,
} from "../services/user";

export default function Account() {
  const [profile, setProfile] = useState(null);
  const [rentals, setRentals] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [p, r, s] = await Promise.all([
        getUserProfile(),
        getUserRentals(),
        getSavedCars(),
      ]);
      setProfile(p);
      setRentals(r);
      setSaved(s);
      setLoading(false);
    }
    load();
  }, []);

  async function handleCancel(id) {
    await cancelRental(id);
    const updated = await getUserRentals();
    setRentals(updated);
  }

  async function handleRemoveSaved(id) {
    await removeSavedCar(id);
    const updated = await getSavedCars();
    setSaved(updated);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-extrabold">Tài khoản</h1>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#54c6a8]/20 text-[#54c6a8] hover:bg-[#54c6a8]/5 transition-colors text-sm"
          >
            Về trang chủ
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <AccountSidebar />
          </aside>

          <main className="lg:col-span-3 space-y-6">
            <section
              id="profile"
              className="bg-white p-6 rounded-2xl shadow-md transform-gpu transition-transform hover:-translate-y-1 hover:shadow-lg border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-3 text-[#54c6a8]">
                Hồ sơ
              </h3>
              {loading ? (
                <div className="text-sm text-gray-500">Đang tải…</div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-700">
                    {profile?.name?.split(" ").slice(-1)[0]?.[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{profile?.name}</div>
                    <div className="text-sm text-gray-500">
                      {profile?.email}
                    </div>
                    <div className="text-sm text-gray-500">
                      {profile?.phone}
                    </div>
                  </div>
                </div>
              )}
            </section>

            <section
              id="rentals"
              className="bg-white p-6 rounded-2xl shadow-md transform-gpu transition-transform hover:-translate-y-1 hover:shadow-lg border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-3 text-[#54c6a8]">
                Lịch sử đặt xe
              </h3>
              <RentalsList rentals={rentals} onCancel={handleCancel} />
            </section>

            <section
              id="saved"
              className="bg-white p-6 rounded-2xl shadow-md transform-gpu transition-transform hover:-translate-y-1 hover:shadow-lg border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-3 text-[#54c6a8]">
                Xe đã lưu
              </h3>
              <SavedCars cars={saved} onRemove={handleRemoveSaved} />
            </section>

            <section
              id="payments"
              className="bg-white p-6 rounded-2xl shadow-md transform-gpu transition-transform hover:-translate-y-1 hover:shadow-lg border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-3 text-[#54c6a8]">
                Phương thức thanh toán
              </h3>
              <div className="text-sm text-gray-500">
                Chưa có phương thức thanh toán nào. Thêm khi cần tính năng.
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
