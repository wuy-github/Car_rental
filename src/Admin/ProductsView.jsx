import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";

const ProductsView = ({ products = [], onAdd, onEdit, onDelete }) => {
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const filtered = useMemo(() => {
    if (!query) return products;
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        (p.model || "").toString().toLowerCase().includes(q) ||
        (p.make || "").toString().toLowerCase().includes(q) ||
        (p.plate || "").toString().toLowerCase().includes(q)
    );
  }, [products, query]);

  const openAdd = () => {
    setEditing(null);
    setShowForm(true);
  };

  const openEdit = (p) => {
    setEditing(p);
    setShowForm(true);
  };

  const handleSave = (data) => {
    if (editing) {
      onEdit({ ...editing, ...data });
    } else {
      onAdd(data);
    }
    setShowForm(false);
  };

  const ProductForm = ({ initial = {}, onCancel, onSave }) => {
    const [form, setForm] = React.useState({
      model: initial.model || "",
      make: initial.make || "",
      year: initial.year || new Date().getFullYear(),
      plate: initial.plate || "",
      pricePerDay: initial.pricePerDay || "",
      seats: initial.seats ?? 4,
      status: initial.status || "Sẵn sàng",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((s) => ({
        ...s,
        [name]: name === "year" || name === "seats" ? Number(value) : value,
      }));
    };

    return (
      <div className="p-4">
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">Tên xe (Model)</label>
            <input
              name="model"
              value={form.model}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Hãng</label>
            <input
              name="make"
              value={form.make}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-medium">Năm</label>
              <input
                name="year"
                type="number"
                value={form.year}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Biển số</label>
              <input
                name="plate"
                value={form.plate}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-medium">Giá / ngày</label>
              <input
                name="pricePerDay"
                value={form.pricePerDay}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Số chỗ</label>
              <input
                name="seats"
                type="number"
                value={form.seats}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Trạng thái</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            >
              <option>Sẵn sàng</option>
              <option>Đang thuê</option>
              <option>Bảo trì</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={onCancel} className="px-3 py-1 border rounded">
              Hủy
            </button>
            <button
              onClick={() => onSave(form)}
              className="px-3 py-1 bg-indigo-600 text-white rounded"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-indigo-500 text-white p-6 rounded-xl shadow-md">
          <h4 className="text-indigo-100 text-sm font-medium">Tổng xe</h4>
          <p className="text-3xl font-bold mt-2">{products.length}</p>
        </div>
        <div className="bg-emerald-500 text-white p-6 rounded-xl shadow-md">
          <h4 className="text-emerald-100 text-sm font-medium">Xe sẵn sàng</h4>
          <p className="text-3xl font-bold mt-2">
            {products.filter((p) => p.status === "Sẵn sàng").length}
          </p>
        </div>
        <div className="bg-rose-500 text-white p-6 rounded-xl shadow-md">
          <h4 className="text-rose-100 text-sm font-medium">Xe đang thuê</h4>
          <p className="text-3xl font-bold mt-2">
            {products.filter((p) => p.status === "Đang thuê").length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={openAdd}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
            >
              Thêm xe
            </button>
          </div>
          <div className="relative w-full sm:w-auto">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Tìm xe..."
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
              <tr>
                <th className="px-6 py-4">Tên xe</th>
                <th className="px-6 py-4">Hãng</th>
                <th className="px-6 py-4">Giá / ngày</th>
                <th className="px-6 py-4">Số chỗ</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {product.model}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{product.make}</td>
                  <td className="px-6 py-4 font-medium">
                    {product.pricePerDay}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{product.seats}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`flex items-center gap-1 text-xs font-semibold ${
                        product.status === "Sẵn sàng"
                          ? "text-green-600"
                          : product.status === "Đang thuê"
                          ? "text-orange-600"
                          : "text-red-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => openEdit(product)}
                      className="text-indigo-600 hover:text-indigo-900 font-medium"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Xóa xe này?")) onDelete(product.id);
                      }}
                      className="text-red-600 hover:text-red-900 font-medium"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg w-full max-w-lg shadow-lg">
            <div className="p-4 border-b flex items-center justify-between">
              <h4 className="font-medium">{editing ? "Sửa xe" : "Thêm xe"}</h4>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>
            <ProductForm
              initial={editing || {}}
              onCancel={() => setShowForm(false)}
              onSave={handleSave}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsView;
