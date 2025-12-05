import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { FaLocationDot } from "react-icons/fa6";

// Headless UI
import { Combobox, Transition } from "@headlessui/react";

const menuItems = [{ label: "Ký gửi xe" }, { label: "Blog" }];

function Header() {
  // --- Dữ liệu & State cho Combobox ---
  const provinces = [
    { id: 1, name: "Hồ Chí Minh" },
    { id: 2, name: "Hà Nội" },
    { id: 3, name: "Đà Nẵng" },
    { id: 4, name: "Hải Phòng" },
    { id: 5, name: "Cần Thơ" },
  ];

  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const [query, setQuery] = useState("");

  const filteredProvinces =
    query === ""
      ? provinces
      : provinces.filter((province) =>
          province.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  // --- Component con cho Dropdown Vị trí ---
  const LocationSelector = () => (
    <Combobox value={selectedProvince} onChange={setSelectedProvince}>
      <div className="relative w-48">
        {" "}
        {/* */}
        <Combobox.Button className="flex items-center w-full p-2 text-gray-700 hover:bg-blue-50 hover:rounded-lg font-medium transition-all duration-200">
          <FaLocationDot className="h-5 w-5 mr-1 text-blue-500" />
          <span className="block truncate">{selectedProvince.name}</span>
          <ChevronUpDownIcon
            className="h-5 w-5 ml-auto text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-2 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 -translate-y-2 scale-95"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute z-auto mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {/* Ô tìm kiếm */}
            <div className="p-2">
              <Combobox.Input
                className="w-full rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Tìm tỉnh thành..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            {/* Danh sách kết quả */}
            {filteredProvinces.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Không tìm thấy.
              </div>
            ) : (
              filteredProvinces.map((province) => (
                <Combobox.Option
                  key={province.id}
                  value={province}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {province.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );

  //  (Chỉ cho Desktop) ---
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. Logo */}
          <a href="/" className="text-2xl font-bold text-blue-600">
            Tonicar
          </a>

          {/* 2. Nav Links  */}
          <div className="flex items-center space-x-8">
            <LocationSelector />
            {menuItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center p-2 text-gray-700 hover:bg-blue-50 hover:rounded-lg font-medium transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="block">
            <Link
              to="login"
              className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors "
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
