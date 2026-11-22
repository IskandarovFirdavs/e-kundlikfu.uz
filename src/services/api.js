const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (window.location.hostname.includes("localhost") ||
  window.location.hostname.includes("127.0.0.1")
    ? "" // Localda Vite proxy ishlatadi
    : "https://api.e-kundalikfu.uz"); // Productionda

class API {
  constructor() {
    this.token = localStorage.getItem("authToken") || "";
  }

  // Rasm URL ni olish
  getImageUrl(path) {
    if (!path) return "";

    if (path.startsWith("http")) {
      return path;
    }

    // Productionda to'g'ridan backend URL bilan
    return `https://api.e-kundalikfu.uz${
      path.startsWith("/") ? path : `/${path}`
    }`;
  }

  // Umumiy so'rov metod
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const config = {
      mode: "cors",
      credentials: "omit", // ⚠️ IMPORTANT: Vercel uchun 'omit' ishlatish kerak
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

      // 401 xatosi bo'lsa
      if (response.status === 401) {
        this.clearToken();
        throw new Error("Authentication failed. Please login again.");
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error ${response.status}: ${errorText}`);
      }

      // JSON response ni olish
      return await response.json();
    } catch (error) {
      // CORS xatosini aniqlash
      if (error.message.includes("Failed to fetch")) {
        throw new Error(
          `CORS/Network error: Cannot connect to ${API_BASE_URL}. ` +
            `Check: 1) Backend CORS settings, 2) Backend is running, 3) Network`
        );
      }

      throw error;
    }
  }

  // Token ni saqlash
  setToken(token) {
    this.token = token;
    localStorage.setItem("authToken", token);
  }

  // Token ni o'chirish
  clearToken() {
    this.token = "";
    localStorage.removeItem("authToken");

    // Vercel uchun redirect
    window.location.href = "/";
  }

  // LOGIN - muvaffaqiyatsiz urinishda profil yuklanmaydi
  async login(username, password) {
    const url = `${API_BASE_URL}/users/login/`;

    // Eski token yangi login urinishiga aralashmasin.
    this.token = "";
    localStorage.removeItem("authToken");

    let response;
    try {
      response = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
    } catch (error) {
      if (error.message?.includes("Failed to fetch")) {
        throw new Error("Server bilan aloqa yo‘q. Internet yoki serverni tekshiring.");
      }
      throw error;
    }

    const responseText = await response.text();
    let data = {};
    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = {};
    }

    if (!response.ok) {
      const message =
        data.detail ||
        data.message ||
        data.error ||
        data.non_field_errors?.[0] ||
        data.username?.[0] ||
        data.password?.[0];

      if (response.status === 400 || response.status === 401) {
        throw new Error(message || "Username yoki parol noto‘g‘ri.");
      }
      throw new Error(message || `Server xatosi (${response.status}).`);
    }

    const token = data.access_token || data.token;
    if (!token) {
      throw new Error(
        data.detail || data.message || "Server token qaytarmadi. Login amalga oshmadi."
      );
    }

    this.setToken(token);
    return data;
  }

  // CURRENT USER PROFILE
  async getCurrentUser() {
    return this.request("/users/");
  }

  // LOGOUT
  async logout() {
    this.clearToken();
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

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Report creation failed: ${response.status} ${errorText}`
        );
      }

      return await response.json();
    } catch (error) {
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
