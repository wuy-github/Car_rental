import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import carlogin from "../assets/images/carlogin.jpg";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // true = Đăng nhập, false = Đăng ký
  const [showPassword, setShowPassword] = useState(false);

  // Hàm chuyển đổi giữa Login và Register
  const toggleMode = () => {
    setIsLogin(!isLogin);
    // Reset form hoặc scroll lên đầu nếu cần
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* --- PHẦN BÊN TRÁI: FORM --- */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-white relative">
        {/* Nút quay lại trang chủ */}
        <Link
          to="/"
          className="absolute top-8 left-8 text-gray-500 hover:text-blue-600 flex items-center gap-2 font-medium transition-colors"
        >
          <FaArrowLeft /> Trang chủ
        </Link>

        <div className="w-full max-w-md space-y-8">
          {/* Header của form */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              {isLogin ? "Chào mừng trở lại!" : "Tạo tài khoản mới"}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin
                ? "Nhập thông tin để truy cập vào tài khoản của bạn."
                : "Điền thông tin bên dưới để bắt đầu hành trình."}
            </p>
          </div>

          {/* Các nút Social Login */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-all">
              <FaGoogle className="text-red-500 mr-2" />
              Tiếp tục với Google
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-all">
              <FaFacebook className="text-blue-600 mr-2" />
              Tiếp tục với Facebook
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Hoặc</span>
            </div>
          </div>

          {/* Form nhập liệu */}
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              {/* Chỉ hiện tên khi Đăng ký */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="name@company.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mật khẩu
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Quên mật khẩu (Chỉ hiện khi Login) */}
              {isLogin && (
                <div className="flex items-center justify-end">
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {isLogin ? "Đăng nhập" : "Đăng ký tài khoản"}
            </button>
          </form>

          {/* Chuyển đổi Login/Register */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
              <button
                onClick={toggleMode}
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                {isLogin ? "Đăng ký ngay" : "Đăng nhập ngay"}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* --- PHẦN BÊN PHẢI: HÌNH ẢNH (Ẩn trên mobile) --- */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={carlogin}
          alt="Luxury Car Background"
        />
        {/* Lớp phủ màu đen mờ để chữ nổi hơn */}
        <div className="absolute inset-0 bg-black/40 bg-opacity-80 flex items-center justify-center">
          <div className="text-white text-center  p-12 mb-[-400px]">
            <h2 className="text-4xl font-bold mb-4">Tonicar</h2>
            <p className="text-xl max-w-md mx-auto">
              Trải nghiệm những hành trình tuyệt vời với dịch vụ thuê xe hàng
              đầu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
