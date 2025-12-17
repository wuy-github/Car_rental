import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import carlogin from "../assets/images/carlogin.jpg";
import { sendOtp, verifyOtp, resetPassword } from "../services/auth";
import { useAuth } from "../context/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import OTPLogin from "../components/auth/OTPLogin";
import ForgotPasswordCard from "../components/auth/ForgotPasswordCard";
import RegisterFlow from "../components/auth/RegisterFlow";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // true = Đăng nhập, false = Đăng ký

  // OTP states (shared)
  const [contact, setContact] = useState(""); // phone or email
  const [otp, setOtp] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [sendError, setSendError] = useState("");
  const [verifyError, setVerifyError] = useState("");

  // Forgot password flow
  const [forgotMode, setForgotMode] = useState(false);
  const [forgotStep, setForgotStep] = useState("contact");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState("");

  const [regStep, setRegStep] = useState("contact");
  const [loginOtpMode, setLoginOtpMode] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/account";

  // Helpers that wrap the auth service and manage local loading/errors
  const handleSendOtp = async (destination) => {
    setIsSending(true);
    setSendError("");
    try {
      const res = await sendOtp(destination);
      if (res.ok) {
        setOtpSent(true);
        return true;
      }
      setSendError(res.error || "Không thể gửi mã OTP");
      return false;
    } catch {
      setSendError("Lỗi khi gửi mã OTP");
      return false;
    } finally {
      setIsSending(false);
    }
  };

  const handleVerifyOtp = async (destination, code) => {
    setIsVerifying(true);
    setVerifyError("");
    try {
      const res = await verifyOtp(destination, code);
      if (res.ok) return { ok: true };
      setVerifyError(res.error || "Mã OTP không chính xác");
      return { ok: false };
    } catch {
      setVerifyError("Lỗi khi xác thực OTP");
      return { ok: false };
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResetPassword = async (destination, code, password) => {
    setIsSending(true);
    setVerifyError("");
    try {
      const res = await resetPassword(destination, code, password);
      if (res.ok) return { ok: true };
      setVerifyError(res.error || "Không thể đặt lại mật khẩu");
      return { ok: false };
    } catch {
      setVerifyError("Lỗi khi đặt lại mật khẩu");
      return { ok: false };
    } finally {
      setIsSending(false);
    }
  };

  const toggleMode = () => {
    setIsLogin((s) => !s);
    setRegStep("contact");
    setLoginOtpMode(false);
    setContact("");
    setOtp("");
    setOtpSent(false);
    setSendError("");
    setVerifyError("");
    setForgotMode(false);
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

          {/* Form nhập liệu / OTP flows */}
          <div className="mt-8">
            {isLogin ? (
              // LOGIN UI
              <div className="space-y-4">
                {!loginOtpMode ? (
                  <LoginForm
                    onForgot={() => {
                      setForgotMode(true);
                      setForgotStep("contact");
                      setContact("");
                      setOtp("");
                      setOtpSent(false);
                      setForgotSuccess("");
                    }}
                    onSwitchToOtp={() => {
                      setLoginOtpMode(true);
                      setContact("");
                      setOtp("");
                      setOtpSent(false);
                    }}
                    onLogin={async (email, password) => {
                      // If password provided, attempt password login
                      if (password && password.length > 0) {
                        const res = await import("../services/auth").then((m) =>
                          m.loginWithPassword(email, password)
                        );
                        if (res.ok) {
                          auth.login(res.user);
                          navigate(from);
                        } else {
                          // show simple alert for now
                          alert(res.error || "Đăng nhập thất bại");
                        }
                        return;
                      }

                      // Otherwise start OTP flow using provided contact
                      setContact(email);
                      setOtp("");
                      setOtpSent(false);
                      setLoginOtpMode(true);
                    }}
                  />
                ) : (
                  <OTPLogin
                    contact={contact}
                    setContact={setContact}
                    otp={otp}
                    setOtp={setOtp}
                    otpSent={otpSent}
                    setOtpSent={setOtpSent}
                    isSending={isSending}
                    isVerifying={isVerifying}
                    handleSendOtp={handleSendOtp}
                    handleVerifyOtp={handleVerifyOtp}
                    setLoginOtpMode={setLoginOtpMode}
                    onSuccess={async () => {
                      await auth.loginFromService();
                      navigate(from);
                    }}
                  />
                )}

                {/* FORGOT PASSWORD MODE (overlay on login) */}
                {forgotMode && (
                  <ForgotPasswordCard
                    forgotStep={forgotStep}
                    setForgotStep={setForgotStep}
                    contact={contact}
                    setContact={setContact}
                    sendError={sendError}
                    isSending={isSending}
                    otp={otp}
                    setOtp={setOtp}
                    verifyError={verifyError}
                    isVerifying={isVerifying}
                    handleSendOtp={handleSendOtp}
                    handleVerifyOtp={handleVerifyOtp}
                    handleResetPassword={handleResetPassword}
                    setForgotMode={setForgotMode}
                    forgotSuccess={forgotSuccess}
                    setForgotSuccess={setForgotSuccess}
                    newPassword={newPassword}
                    setNewPassword={setNewPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                  />
                )}
              </div>
            ) : (
              // REGISTER UI - multi-step
              <RegisterFlow
                regStep={regStep}
                setRegStep={setRegStep}
                contact={contact}
                setContact={setContact}
                otp={otp}
                setOtp={setOtp}
                sendError={sendError}
                isSending={isSending}
                verifyError={verifyError}
                isVerifying={isVerifying}
                handleSendOtp={handleSendOtp}
                handleVerifyOtp={handleVerifyOtp}
                setIsLogin={setIsLogin}
              />
            )}
          </div>

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
