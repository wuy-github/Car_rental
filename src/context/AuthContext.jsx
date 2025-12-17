import React, { useEffect, useState } from "react";
import { getUserProfile } from "../services/user";
import { AuthContext } from "./AuthStore";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("__auth_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("__auth_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("__auth_user");
    }
  }, [user]);

  async function loginFromService() {
    // Try to fetch the profile from the (mock) user service
    try {
      const p = await getUserProfile();
      setUser(p);
      return p;
    } catch {
      setUser(null);
      return null;
    }
  }

  function login(userObj) {
    setUser(userObj || null);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout, loginFromService }}
    >
      {children}
    </AuthContext.Provider>
  );
}
