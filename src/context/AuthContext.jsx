// context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  // ✅ APP YUKLANGANDA AVTOMATIK TEKSHIRISH
  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      // 1. LocalStorage'dan user ma'lumotlarini olish
      const savedUser = localStorage.getItem("user");
      const savedToken = localStorage.getItem("authToken");

      // 2. Agar hech qanday ma'lumot bo'lmasa
      if (!savedToken || !savedUser) {
        setUser(null);
        setAuthChecked(true);
        setLoading(false);
        return;
      }

      // 3. Token validligini tekshirish (API orqali)
      api.setToken(savedToken); // API ga token ni o'rnatish

      try {
        const userData = await api.getCurrentUser();

        // Yangi user ma'lumotlarini saqlash
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } catch (error) {
        // Token invalid - barcha ma'lumotlarni tozalash
        api.clearToken();
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true);
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    try {
      // Login xato bo‘lsa, api.login xato qaytaradi va profil so‘rovi bajarilmaydi.
      await api.login(username, password);

      // Profil faqat token muvaffaqiyatli olingandan keyin yuklanadi.
      const userData = await api.getCurrentUser();

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      return {
        success: true,
        user: userData,
        token: api.token,
      };
    } catch (error) {
      api.token = "";
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      setUser(null);

      return {
        success: false,
        error: error.message || "Login amalga oshmadi.",
      };
    }
  };

    const logout = () => {
    api.logout();
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
  };

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const checkAuthStatus = () => {
    return !!user && !!api.token;
  };

  const value = {
    user,
    loading,
    login,
    logout,
    updateUser,
    checkAuthStatus,
    isAuthenticated: !!user,
    hasRole: (role) => user?.role === role,
    authChecked, // Yangi: auth tekshirilganligini bilish uchun
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
