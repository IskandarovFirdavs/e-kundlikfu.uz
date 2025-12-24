// API.js - GitHub Pages va local development uchun optimallashtirilgan
const isLocalDevelopment =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

// Base URL ni aniqlash
const API_BASE_URL = isLocalDevelopment
  ? "" // Localda Vite proxy ishlatadi
  : "https://api.e-kundalikfu.uz"; // Productionda to'g'ridan backendga

class API {
  constructor() {
    this.token = localStorage.getItem("authToken") || "";
    console.log("API initialized with base URL:", API_BASE_URL);
    console.log("Is local development?", isLocalDevelopment);
  }

  // Rasm URL ni olish - GitHub Pages uchun optimallashtirilgan
  getImageUrl(path) {
    if (!path) return "";

    // Agar backend to'liq URL qaytargan bo'lsa
    if (path.startsWith("http")) {
      return path;
    }

    // GitHub Pages uchun to'liq URL qaytarish
    if (!isLocalDevelopment) {
      // Productionda to'g'ridan backend URL bilan
      return `https://api.e-kundalikfu.uz${
        path.startsWith("/") ? path : `/${path}`
      }`;
    }

    // Localda proxy orqali
    return path.startsWith("/") ? path : `/${path}`;
  }

  // Umumiy so'rov metod - CORS va error handling bilan
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    console.log(`API Request: ${options.method || "GET"} ${url}`);

    const config = {
      mode: "cors", // CORS mode ni faollashtirish
      credentials: isLocalDevelopment ? "same-origin" : "include", // Cookie lar uchun
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    // Token qo'shish
    if (this.token) {
      config.headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, config);

      console.log(`API Response: ${response.status} ${response.statusText}`);

      // 401 xatosi bo'lsa (token eskirgan)
      if (response.status === 401) {
        console.warn("Token expired or invalid, clearing token");
        this.clearToken();
        throw new Error("Authentication failed. Please login again.");
      }

      // 403 xatosi bo'lsa (ruxsat yo'q)
      if (response.status === 403) {
        throw new Error("You don't have permission to access this resource.");
      }

      if (!response.ok) {
        let errorMessage = `HTTP error! Status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.detail || errorData.message || errorMessage;
        } catch (e) {
          // JSON parse qilish mumkin bo'lmasa, text olish
          const errorText = await response.text();
          if (errorText) errorMessage = errorText;
        }
        throw new Error(errorMessage);
      }

      // JSON response ni olish
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("API Response data:", data);
        return data;
      } else {
        console.log("API Response: non-JSON response");
        return { success: true };
      }
    } catch (error) {
      console.error("API Request Error:", error);

      // CORS xatosini aniqlash
      if (
        error.name === "TypeError" &&
        error.message.includes("Failed to fetch")
      ) {
        const corsError = new Error(
          `CORS error: Cannot connect to server at ${API_BASE_URL}. ` +
            `Please check: 1) Backend server is running, 2) CORS is enabled, ` +
            `3) Your network connection`
        );
        console.error(corsError.message);
        throw corsError;
      }

      // Network xatosini aniqlash
      if (
        error.name === "TypeError" &&
        error.message.includes("NetworkError")
      ) {
        const networkError = new Error(
          "Network error: Please check your internet connection"
        );
        throw networkError;
      }

      throw error;
    }
  }

  // Token ni saqlash
  setToken(token) {
    this.token = token;
    localStorage.setItem("authToken", token);
    console.log("Token saved to localStorage");
  }

  // Token ni o'chirish
  clearToken() {
    this.token = "";
    localStorage.removeItem("authToken");
    console.log("Token cleared from localStorage");

    // GitHub Pages uchun to'g'ri redirect
    const currentPath = window.location.pathname;
    const isGitHubPages = window.location.hostname.includes("github.io");

    if (
      currentPath !== "/" &&
      currentPath !== "/e-maktab/" &&
      currentPath !== "/e-maktab"
    ) {
      if (isGitHubPages) {
        window.location.href = "/e-maktab/"; // GitHub Pages uchun
      } else {
        window.location.href = "/"; // Local uchun
      }
    }
  }

  // Token mavjudligini tekshirish
  hasToken() {
    const hasToken = !!this.token;
    console.log("Token exists?", hasToken);
    return hasToken;
  }

  // Token ni tekshirish (valid yoki yo'q)
  async validateToken() {
    if (!this.token) {
      return false;
    }

    try {
      await this.getCurrentUser();
      return true;
    } catch (error) {
      console.warn("Token validation failed:", error);
      return false;
    }
  }

  // =============================================
  // USERS API - Optimallashtirilgan
  // =============================================

  // LOGIN - CORS uchun optimallashtirilgan
  async login(username, password) {
    const url = `${API_BASE_URL}/users/login/`;
    console.log("Login attempt to:", url);

    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      console.log("Login response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Login failed:", errorText);
        throw new Error(`Login failed: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      console.log("Login successful, response:", data);

      // Token ni saqlash
      if (data.access_token) {
        this.setToken(data.access_token);
        console.log("Access token saved");
      } else if (data.token) {
        this.setToken(data.token);
        console.log("Token saved");
      }

      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  // CURRENT USER PROFILE
  async getCurrentUser() {
    return this.request("/users/");
  }

  // LOGOUT
  async logout() {
    this.clearToken();
    console.log("User logged out");
    return { success: true };
  }

  // CREATE USER (Admin only)
  async createUser(userData) {
    return this.request("/users/users/", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  // LIST USERS
  async getUsers() {
    return this.request("/users/users/");
  }

  // GET USER BY ID
  async getUserById(userId) {
    return this.request(`/users/users/${userId}/`);
  }

  // UPDATE USER (PUT)
  async updateUser(userId, userData) {
    return this.request(`/users/users/${userId}/`, {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  // PARTIAL UPDATE USER (PATCH)
  async partialUpdateUser(userId, userData) {
    return this.request(`/users/users/${userId}/`, {
      method: "PATCH",
      body: JSON.stringify(userData),
    });
  }

  // DELETE user
  async deleteUser(userId) {
    return this.request(`/users/users/${userId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // FACULTIES API
  // =============================================

  // LIST FACULTIES
  async getFaculties() {
    return this.request("/university/faculties/");
  }

  // CREATE FACULTY
  async createFaculty(facultyData) {
    return this.request("/university/faculties/", {
      method: "POST",
      body: JSON.stringify(facultyData),
    });
  }

  // RETRIEVE FACULTY
  async getFaculty(facultyId) {
    return this.request(`/university/faculties/${facultyId}/`);
  }

  // UPDATE FACULTY
  async updateFaculty(facultyId, facultyData) {
    return this.request(`/university/faculties/${facultyId}/`, {
      method: "PUT",
      body: JSON.stringify(facultyData),
    });
  }

  // UPDATE FACULTY PARTIAL
  async partialUpdateFaculty(facultyId, facultyData) {
    return this.request(`/university/faculties/${facultyId}/`, {
      method: "PATCH",
      body: JSON.stringify(facultyData),
    });
  }

  // DELETE FACULTY
  async deleteFaculty(facultyId) {
    return this.request(`/university/faculties/${facultyId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // DEPARTMENTS API
  // =============================================

  // LIST DEPARTMENTS
  async getDepartments() {
    return this.request("/university/departments/");
  }

  // CREATE DEPARTMENT
  async createDepartment(departmentData) {
    return this.request("/university/departments/", {
      method: "POST",
      body: JSON.stringify(departmentData),
    });
  }

  // RETRIEVE DEPARTMENT
  async getDepartment(departmentId) {
    return this.request(`/university/departments/${departmentId}/`);
  }

  // UPDATE DEPARTMENT
  async updateDepartment(departmentId, departmentData) {
    return this.request(`/university/departments/${departmentId}/`, {
      method: "PUT",
      body: JSON.stringify(departmentData),
    });
  }

  // DELETE DEPARTMENT
  async deleteDepartment(departmentId) {
    return this.request(`/university/departments/${departmentId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // DIRECTIONS API
  // =============================================

  // LIST DIRECTIONS
  async getDirections() {
    return this.request("/university/directions/");
  }

  // CREATE DIRECTION
  async createDirection(directionData) {
    return this.request("/university/directions/", {
      method: "POST",
      body: JSON.stringify(directionData),
    });
  }

  // RETRIEVE DIRECTION
  async getDirection(directionId) {
    return this.request(`/university/directions/${directionId}/`);
  }

  // UPDATE DIRECTION
  async updateDirection(directionId, directionData) {
    return this.request(`/university/directions/${directionId}/`, {
      method: "PUT",
      body: JSON.stringify(directionData),
    });
  }

  // DELETE DIRECTION
  async deleteDirection(directionId) {
    return this.request(`/university/directions/${directionId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // GROUPS API
  // =============================================

  // LIST GROUPS
  async getGroups() {
    return this.request("/university/groups/");
  }

  // CREATE GROUP
  async createGroup(groupData) {
    return this.request("/university/groups/", {
      method: "POST",
      body: JSON.stringify(groupData),
    });
  }

  // RETRIEVE GROUP
  async getGroup(groupId) {
    return this.request(`/university/groups/${groupId}/`);
  }

  // UPDATE GROUP
  async updateGroup(groupId, groupData) {
    return this.request(`/university/groups/${groupId}/`, {
      method: "PUT",
      body: JSON.stringify(groupData),
    });
  }

  // DELETE GROUP
  async deleteGroup(groupId) {
    return this.request(`/university/groups/${groupId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // PRACTICE API
  // =============================================

  // LIST PRACTICE DAYS
  async getPracticeDays() {
    return this.request("/practice/practice_days/");
  }

  // RETRIEVE PRACTICE DAY
  async getPracticeDay(practiceDayId) {
    return this.request(`/practice/practice_days/${practiceDayId}/`);
  }

  // CREATE PRACTICE DAY (ADMIN only)
  async createPracticeDay(practiceData) {
    return this.request("/practice/practice_days/", {
      method: "POST",
      body: JSON.stringify(practiceData),
    });
  }

  // UPDATE PRACTICE DAY
  async updatePracticeDay(practiceDayId, practiceData) {
    return this.request(`/practice/practice_days/${practiceDayId}/`, {
      method: "PUT",
      body: JSON.stringify(practiceData),
    });
  }

  // PARTIAL UPDATE PRACTICE DAY
  async partialUpdatePracticeDay(practiceDayId, practiceData) {
    return this.request(`/practice/practice_days/${practiceDayId}/`, {
      method: "PATCH",
      body: JSON.stringify(practiceData),
    });
  }

  // DELETE PRACTICE DAY
  async deletePracticeDay(practiceDayId) {
    return this.request(`/practice/practice_days/${practiceDayId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // REPORTS API - FormData bilan ishlash uchun optimallashtirilgan
  // =============================================

  // LIST MY REPORTS (student + admin only)
  async getMyReports() {
    return this.request("/practice/reports/");
  }

  // RETRIEVE MY SINGLE REPORT
  async getMyReport(reportId) {
    return this.request(`/practice/reports/${reportId}/`);
  }

  // CREATE REPORT (ONLY STUDENT) - FormData bilan
  async createReport(formData) {
    const url = `${API_BASE_URL}/practice/reports/`;
    console.log("Creating report at:", url);

    const config = {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: this.token ? `Bearer ${this.token}` : "",
        // FormData bilan ishlaganda Content-Type ni bermang, browser o'zi belgilaydi
      },
      body: formData,
    };

    try {
      const response = await fetch(url, config);
      console.log("Create report response:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Create report failed:", errorText);
        throw new Error(
          `Report creation failed: ${response.status} ${errorText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Create report error:", error);
      throw error;
    }
  }

  // UPDATE REPORT
  async updateReport(reportId, reportData) {
    return this.request(`/practice/reports/${reportId}/`, {
      method: "PUT",
      body: JSON.stringify(reportData),
    });
  }

  // DELETE REPORT
  async deleteReport(reportId) {
    return this.request(`/practice/reports/${reportId}/`, {
      method: "DELETE",
    });
  }
}

// API instansini yaratish va eksport qilish
const api = new API();
export default api;
