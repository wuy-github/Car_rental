import React from "react";

export default function RegisterFlow({
  regStep,
  setRegStep,
  contact,
  setContact,
  otp,
  setOtp,
  sendError,
  isSending,
  verifyError,
  isVerifying,
  handleSendOtp,
  handleVerifyOtp,
  setIsLogin,
}) {
  return (
    <div className="space-y-4">
      {regStep === "contact" && (
        <>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email hoặc SĐT
            </label>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              placeholder="Nhập email hoặc số điện thoại"
            />
          </div>
          {sendError && <div className="text-sm text-red-600">{sendError}</div>}
          <div className="flex gap-2">
            <button
              onClick={async () => {
                const ok = await handleSendOtp(contact);
                if (ok) setRegStep("otp");
              }}
              className={`px-4 py-2 rounded bg-[#54c6a8] text-white ${
                isSending ? "opacity-60" : ""
              }`}
            >
              {isSending ? "Đang gửi..." : "Gửi mã OTP"}
            </button>
            <button
              onClick={() => {
                setIsLogin(true);
                setContact("");
              }}
              className="px-4 py-2 rounded border"
            >
              Hủy
            </button>
          </div>
        </>
      )}

      {regStep === "otp" && (
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mã OTP
            </label>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              placeholder="Nhập mã OTP"
            />
          </div>
          {verifyError && (
            <div className="text-sm text-red-600">{verifyError}</div>
          )}
          <div className="flex gap-2">
            <button
              onClick={async () => {
                const res = await handleVerifyOtp(contact, otp);
                if (res.ok) setRegStep("details");
              }}
              className={`px-4 py-2 rounded bg-[#54c6a8] text-white ${
                isVerifying ? "opacity-60" : ""
              }`}
            >
              {isVerifying ? "Đang xác thực..." : "Xác thực OTP"}
            </button>
            <button
              onClick={() => {
                setRegStep("contact");
                setOtp("");
              }}
              className="px-4 py-2 rounded border"
            >
              Quay lại
            </button>
          </div>
        </div>
      )}

      {regStep === "details" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            /* TODO: call registration API */ window.location.href = "/";
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              placeholder="Tạo mật khẩu"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded bg-[#54c6a8] text-white"
            >
              Hoàn tất đăng ký
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
