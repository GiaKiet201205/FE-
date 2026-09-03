import React from "react";
import { createContext, useContext, useMemo, useState } from "react";

const AUTH_STORAGE_KEY = "iig_current_user";

export const DEMO_USERS = [
  {
    id: "U001",
    fullName: "Nguyễn Văn Admin",
    email: "admin@iig.com",
    password: "123456",
    role: "ADMIN",
  },
  {
    id: "U002",
    fullName: "Trần Thị Giáo Viên",
    email: "teacher@iig.com",
    password: "123456",
    role: "TEACHER",
  },
  {
    id: "U003",
    fullName: "Nguyễn Văn A",
    email: "student@iig.com",
    password: "123456",
    role: "STUDENT",
  },
];

const AuthContext = createContext(null);

function readStoredUser() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);

  const login = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();

    const foundUser = DEMO_USERS.find(
      (item) =>
        item.email.toLowerCase() === normalizedEmail &&
        item.password === password,
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Email hoặc mật khẩu không đúng.",
      };
    }

    // Do not persist the demo password.
    const safeUser = {
      id: foundUser.id,
      fullName: foundUser.fullName,
      email: foundUser.email,
      role: foundUser.role,
    };

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(safeUser));
    setUser(safeUser);

    return { success: true, user: safeUser };
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
