import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
// Icons
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { FaLocationDot } from "react-icons/fa6";

// (lightweight dropdown implementation - no Headless UI)

const menuItems = [{ label: "Ký gửi xe" }, { label: "Blog" }];

// Keep provinces array stable across renders so object identity remains
const provinces = [
  { id: 1, name: "Hồ Chí Minh" },
  { id: 2, name: "Hà Nội" },
  { id: 3, name: "Đà Nẵng" },
  { id: 4, name: "Hải Phòng" },
  { id: 5, name: "Cần Thơ" },
];

function Header() {
  // --- Dữ liệu & State cho Combobox ---
  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    // use 'click' to avoid interfering with mousedown focus timing
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // focus input synchronously when dropdown opens to keep caret visible
  useLayoutEffect(() => {
    if (isOpen && inputRef.current) {
      try {
        inputRef.current.focus();
        // move caret to end
        const len = inputRef.current.value?.length || 0;
        inputRef.current.setSelectionRange(len, len);
      } catch {
        // ignore
      }
    }
  }, [isOpen]);

  const filteredProvinces =
    query === ""
      ? provinces
      : provinces.filter((province) =>
          province.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  // --- Component con cho Dropdown Vị trí (lightweight, controlled) ---
  const LocationSelector = () => (
    <div className="relative w-48" ref={containerRef}>
      <div
        className="flex items-center w-full p-2 text-gray-700 hover:bg-blue-50 hover:rounded-lg font-medium transition-all duration-200 cursor-pointer select-none"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((v) => !v);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
            setIsOpen((v) => !v);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <FaLocationDot className="h-5 w-5 mr-1 text-[#54c6a8]" />
        <span className="block truncate">{selectedProvince?.name}</span>
        <ChevronUpDownIcon
          className="h-5 w-5 ml-auto text-gray-400"
          aria-hidden="true"
        />
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
          <div className="p-2">
            <input
              ref={inputRef}
              className="w-full rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 cursor-text"
              placeholder="Tìm tỉnh thành..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => setIsOpen(true)}
            />
          </div>

          {filteredProvinces.length === 0 && query !== "" ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Không tìm thấy.
            </div>
          ) : (
            filteredProvinces.map((province) => {
              const isSelected = selectedProvince?.id === province.id;
              return (
                <div
                  key={province.id}
                  onMouseDown={(e) => {
                    // use onMouseDown to prevent the input blur before click
                    // stopPropagation so parent toggler click doesn't re-open dropdown
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedProvince(province);
                    setQuery("");
                    setIsOpen(false);
                  }}
                  className={`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    isSelected
                      ? "bg-blue-100 text-blue-900 font-medium"
                      : "text-gray-900"
                  } hover:bg-gray-100`}
                >
                  <span className="block truncate">{province.name}</span>
                  {isSelected && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );

  //  (Chỉ cho Desktop) ---
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. Logo */}
          <a href="/" className="text-2xl font-bold text-[#54c6a8]">
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
              className="px-5 py-2.5 bg-[#54c6a8] text-white hover:text-black rounded-full font-medium hover:bg-gray-200 transition-colors "
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
