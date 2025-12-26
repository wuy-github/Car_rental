import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
// Icons
import {
  ChevronUpDownIcon,
  CheckIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/20/solid";
import { FaLocationDot } from "react-icons/fa6";

// (lightweight dropdown implementation - no Headless UI)

const menuItems = [
  { label: "Ký gửi xe", to: "/ky-gui-xe" },
  { label: "Blog", to: "/blog" },
];

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

  // --- Theme (dark / light) ---
  const [isDark, setIsDark] = useState(() => {
    try {
      const t = localStorage.getItem("theme");
      if (t) return t === "dark";
      return (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // ignore
    }
  }, [isDark]);

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
        className="flex items-center w-full p-2 text-black hover:bg-blue-50 hover:rounded-lg font-medium transition-all duration-200 cursor-pointer select-none"
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
            <div className="relative cursor-default select-none py-2 px-4 text-black">
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
                      : "text-black"
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
    <nav className="bg-white dark:bg-darkbg dark:text-gray-100 shadow-md sticky top-0 z-50">
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
              <Link
                key={i}
                to={item.to || "#"}
                className="flex items-center p-2 text-black hover:bg-blue-50 hover:rounded-lg font-semibold transition-all duration-200 dark:text-gray-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setIsDark((v) => !v)}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              title={isDark ? "Light mode" : "Dark mode"}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-black" />
              )}
            </button>

            <AuthToggle />
          </div>
        </div>
      </div>
    </nav>
  );

  function AuthToggle() {
    const auth = useAuth();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      function onDocClick(e) {
        if (ref.current && !ref.current.contains(e.target)) setOpen(false);
      }
      document.addEventListener("click", onDocClick);
      return () => document.removeEventListener("click", onDocClick);
    }, []);

    if (auth?.isAuthenticated) {
      const name = auth.user?.name || "Người dùng";
      const initials = name.split(" ").slice(-1)[0]?.[0] || "U";

      return (
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-gray-50 focus:outline-none"
            aria-haspopup="true"
            aria-expanded={open}
          >
            {auth.user?.avatar ? (
              <img
                src={auth.user.avatar}
                alt="avatar"
                className="w-9 h-9 rounded-full object-cover"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#54c6a8] text-white flex items-center justify-center font-semibold">
                {initials}
              </div>
            )}
            <span className="hidden sm:inline text-sm text-black">
              {name.split(" ")[0]}
            </span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
              <Link
                to="/account#profile"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-50"
              >
                Hồ sơ
              </Link>
              <Link
                to="/account#rentals"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-50"
              >
                Lịch sử đặt xe
              </Link>
              <Link
                to="/account#saved"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Xe đã lưu
              </Link>
              <Link
                to="/account#payments"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Phương thức thanh toán
              </Link>
              <button
                onClick={() => {
                  setOpen(false);
                  auth.logout();
                  navigate("/");
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
              >
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        to="/login"
        className="px-5 py-2.5 bg-[#54c6a8] text-white hover:text-black rounded-full font-medium hover:bg-gray-200 transition-colors "
      >
        Đăng nhập
      </Link>
    );
  }
}

export default Header;
