import React from "react";

export default function ForgotPasswordCard({
  forgotStep,
  setForgotStep,
  contact,
  setContact,
  sendError,
  isSending,
  otp,
  setOtp,
  verifyError,
  isVerifying,
  handleSendOtp,
  handleVerifyOtp,
  handleResetPassword,
  setForgotMode,
  forgotSuccess,
  setForgotSuccess,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
}) {
  return (
    <div
      className="mt-4 p-4 rounded-lg bg-white transform-gpu transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "0 10px 30px rgba(84,198,168,0.12)" }}
    >
      <div
        className="h-1 w-full rounded-t-lg mb-3"
        style={{ background: "#54c6a8" }}
      />
      {forgotSuccess ? (
        <div className="text-sm text-green-600">{forgotSuccess}</div>
      ) : (
        <>
          {forgotStep === "contact" && (
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
              {sendError && (
                <div className="text-sm text-red-600">{sendError}</div>
              )}
              <div className="flex gap-2">
                <button
                  onClick={async () => {
                    const ok = await handleSendOtp(contact);
                    if (ok) setForgotStep("otp");
                  }}
                  className={`px-4 py-2 rounded bg-[#54c6a8] text-white ${
                    isSending ? "opacity-60" : ""
                  }`}
                >
                  {isSending ? "Đang gửi..." : "Gửi mã OTP"}
                </button>
                <button
                  onClick={() => {
                    setForgotMode(false);
                    setContact("");
                    setOtp("");
                    setForgotStep("contact");
                  }}
                  className="px-4 py-2 rounded border"
                >
                  Hủy
                </button>
              </div>
            </div>
          )}

          {forgotStep === "otp" && (
            <div className="space-y-3">
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
              {verifyError && (
                <div className="text-sm text-red-600">{verifyError}</div>
              )}
              <div className="flex gap-2">
                <button
                  onClick={async () => {
                    const res = await handleVerifyOtp(contact, otp);
                    if (res.ok) setForgotStep("reset");
                  }}
                  className={`px-4 py-2 rounded bg-[#54c6a8] text-white ${
                    isVerifying ? "opacity-60" : ""
                  }`}
                >
                  {isVerifying ? "Đang xác thực..." : "Xác thực OTP"}
                </button>
                <button
                  onClick={() => {
                    setForgotStep("contact");
                    setOtp("");
                  }}
                  className="px-4 py-2 rounded border"
                >
                  Quay lại
                </button>
              </div>
            </div>
          )}

          {forgotStep === "reset" && (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!newPassword || newPassword.length < 6) {
                  // setVerifyError delegated to caller
                  return;
                }
                if (newPassword !== confirmPassword) {
                  return;
                }
                const res = await handleResetPassword(
                  contact,
                  otp,
                  newPassword
                );
                if (res.ok) {
                  setForgotSuccess(
                    "Mật khẩu đã được đặt lại. Bạn có thể đăng nhập bằng mật khẩu mới."
                  );
                  setTimeout(() => {
                    setForgotMode(false);
                    setForgotStep("contact");
                  }, 1200);
                }
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mật khẩu mới
                </label>
                <input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                  placeholder="Nhập mật khẩu mới"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Xác nhận mật khẩu
                </label>
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[#54c6a8] text-white"
                >
                  Đặt lại mật khẩu
                </button>
                <button
                  onClick={() => setForgotStep("otp")}
                  className="px-4 py-2 rounded border"
                >
                  Quay lại
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
}
