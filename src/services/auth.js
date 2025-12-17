// Mock auth service - replace with real API calls when available
export async function sendOtp(destination) {
  // basic validation
  if (!destination || destination.length < 3) {
    return {
      ok: false,
      error: "Vui lòng nhập email hoặc số điện thoại hợp lệ",
    };
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true }), 700);
  });
}

export async function verifyOtp(destination, code) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (code === "123456") resolve({ ok: true });
      else resolve({ ok: false, error: "Mã OTP không chính xác" });
    }, 700);
  });
}

export async function resetPassword(destination, code, password) {
  // first verify
  const res = await verifyOtp(destination, code);
  if (!res.ok) return { ok: false, error: res.error || "Invalid" };
  // use `password` so linters won't complain (mock implementation)
  const _ = password;
  return new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 400));
}

export async function loginWithPassword(destination, password) {
  if (!destination || destination.length < 3) {
    return {
      ok: false,
      error: "Vui lòng nhập email hoặc số điện thoại hợp lệ",
    };
  }
  if (!password || password.length < 4) {
    return { ok: false, error: "Mật khẩu không hợp lệ" };
  }

  // Mocked logic: special admin account
  if (
    destination.toLowerCase() === "admin@tonicar" &&
    password === "admin123"
  ) {
    return {
      ok: true,
      user: {
        id: "admin",
        name: "Quản trị viên",
        email: destination,
        role: "admin",
      },
    };
  }

  // Regular user - accept any password for mock and return a basic user object
  return {
    ok: true,
    user: {
      id: "u_mock",
      name: "Người dùng Mock",
      email: destination,
      role: "user",
    },
  };
}

export default { sendOtp, verifyOtp, resetPassword, loginWithPassword };
