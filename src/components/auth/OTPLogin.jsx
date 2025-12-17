import React from "react";

export default function OTPLogin({
  contact,
  setContact,
  otp,
  setOtp,
  otpSent,
  setOtpSent,
  isSending,
  isVerifying,
  handleSendOtp,
  handleVerifyOtp,
  setLoginOtpMode,
  onSuccess,
}) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email hoặc SĐT
        </label>
        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
          placeholder="Nhập email hoặc số điện thoại"
        />
      </div>

      {!otpSent ? (
        <div className="flex gap-2">
          <button
            onClick={async () => {
              const ok = await handleSendOtp(contact);
              if (ok) setOtpSent(true);
            }}
            className={`px-4 py-2 rounded bg-[#54c6a8] text-white ${
              isSending ? "opacity-60" : ""
            }`}
          >
            {isSending ? "Đang gửi..." : "Lấy mã OTP"}
          </button>
          <button
            className="px-4 py-2 rounded border"
            onClick={() => {
              setLoginOtpMode(false);
              setContact("");
              setOtpSent(false);
            }}
          >
            Hủy
          </button>
          <button
            className="px-4 py-2 rounded bg-[#54c6a8] text-white text-sm font-medium hover:bg-[#3fb094] transition-colors"
            onClick={() => {
              // explicit switch back to password login
              setLoginOtpMode(false);
              setContact("");
              setOtp("");
              setOtpSent(false);
            }}
          >
            Đăng nhập bằng mật khẩu
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mã OTP
            </label>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              placeholder="Nhập mã OTP"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                const res = await handleVerifyOtp(contact, otp);
                if (res.ok) {
                  // notify parent (LoginPage) to persist auth and redirect
                  if (typeof onSuccess === "function") await onSuccess();
                }
              }}
              className={`px-4 py-2 rounded bg-[#54c6a8] text-white ${
                isVerifying ? "opacity-60" : ""
              }`}
            >
              {isVerifying ? "Đang xác thực..." : "Xác thực & Đăng nhập"}
            </button>
            <button
              onClick={() => {
                setOtpSent(false);
                setOtp("");
              }}
              className="px-4 py-2 rounded border"
            >
              Gửi lại mã
            </button>
          </div>
          <div className="mt-2 text-sm">
            <button
              onClick={() => {
                setLoginOtpMode(false);
                setContact("");
                setOtp("");
                setOtpSent(false);
              }}
              className="px-3 py-1 rounded bg-[#54c6a8] text-white text-sm font-medium hover:bg-[#3fb094] transition-colors"
            >
              Đăng nhập bằng mật khẩu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
